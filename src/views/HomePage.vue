<template>
  <div class="relative w-full h-screen flex flex-col bg-cover bg-center justify-center items-center px-[100px] pt-[72px] pb-[36px]"
    :style="{ backgroundImage: `url(${imageUrl})` }">
    <!-- Sidebar Component -->
    <SidebarComponent 
      ref="sidebar" 
      :is-visible="isSidebarVisible" 
      :image-url="imageUrl" 
      :locations="locations"
      @close-sidebar="isSidebarVisible = false"
      @location-clicked="updateLocation"
    />
    <!-- Header -->
    <div class="w-full h-full text-black z-10 flex flex-col">
      <div class="h-auto flex flex-col justify-evenly gap-4">
        <div class="w-full text-black flex flex-row justify-between">
          <span>WeatheringWithU</span>
          <div class="flex flex-row gap-4">
            <button @click="toggleAddLocation" class="tooltip-button">
              <span 
                class="star-icon"
                :class="{
                  'added': isLocationAdded,
                  'not-added': !isLocationAdded,
                }"
              >
                {{ isLocationAdded ? '★' : '☆' }}
              </span>
              <span class="tooltip-text">
                {{ isLocationAdded ? 'Remove Location' : 'Add Location' }}
              </span>
            </button>
            <button @click.stop="toggleSidebar" class="p-2 bg-opacity-0 text-black rounded">
              <font-awesome-icon icon="bars" />
            </button>
          </div>
        </div>
        <div class="w-full flex flex-col items-center gap-4 justify-center font-thin">
          <SearchComponent @location-selected="handleLocationSelect" />
          <div class="bg-opacity-0 h-auto w-[200px] justify-center items-center text-center text-[10rem] font-bold flex gap-3">
            <font-awesome-icon icon="location-pin" />
            <span>{{ $route.params.city.toUpperCase() }}</span>
          </div>
          <div class="bg-opacity-0 h-auto w-auto text-center text-[2rem] font-thin flex">
            <span>{{ formattedDate }}</span>
          </div>
        </div>
      </div>

      <div class="flex-grow overflow-y-auto w-full">
        <div class="flex justify-center items-center mt-16">
          <WeatherStats 
            :temperature="String(temperature)" 
            :uv="getUvIndex(hourInformation.uvindex)" 
            :wind="String(hourInformation.windspeed)" 
            :humidity="String(hourInformation.humidity)" 
            :visibility="String(hourInformation.visibility)" 
            :conditions="String(hourInformation.conditions)"
          />
        </div>

        <div class="flex flex-row justify-center gap-4 mt-8">
          <div class="flex flex-col items-center">
            <HourlyForecast :hours="todayInformation.hours"/>
          </div>

          <div class="flex flex-col items-center">
            <WeeklyForecast :days="apiData.days"/>
          </div>
        </div>

        <div class="flex flex-col items-center mt-8">
          <WeatherAdditionalInfo 
            :aq="String(hourInformation.aqius)" 
            :sunrise="convertTo12HourFormat(todayInformation.sunrise)" 
            :sunset="convertTo12HourFormat(todayInformation.sunset)" 
            :dew="String(todayInformation.dew)" 
            :pressure="String(todayInformation.pressure)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue';
import WeeklyForecast from '@/components/WeeklyForecast.vue';
import HourlyForecast from '@/components/HourlyForecast.vue';
import WeatherStats from '@/components/WeatherStats.vue';
import WeatherAdditionalInfo from '@/components/WeatherAdditionalInfo.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import axios from 'axios';
import Cookies from 'js-cookie'; // To handle cookies

export default {
  name: 'HomePage',
  components: { SidebarComponent, WeeklyForecast, HourlyForecast, WeatherStats, WeatherAdditionalInfo, SearchComponent },
  data() {
    return {
      isSidebarVisible: false,
      imageUrl: 'https://images.unsplash.com/photo-1668853853439-923e013afff1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      currentTime: this.getCurrentTime(),
      formattedDate: this.getFormattedDate(),
      apiData: {},
      todayInformation: {},
      hourInformation: {},
      isLocationAdded: false,
      locations: [],
      temperature: null,
    };
  },
  watch: {
    '$route.params.city': {
      handler: 'fetchData',
      immediate: true
    }
  },
  beforeUnmount() {
    clearInterval(this.timeInterval);
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleAddLocation() {
    if (!this.isLocationAdded) {
      if (this.locations.length >= 5) {
        alert('You can only save up to 5 locations.');
        return; 
      }
      this.addLocation({ name: this.$route.params.city, temp: this.hourInformation.temp });
      this.isLocationAdded = true; // Only toggle if the location is successfully added
    } else {
      this.removeLocation(this.$route.params.city);
      this.isLocationAdded = false; 
    }
  },
    async handleLocationSelect(city) {
      this.isSidebarVisible = false;
      
      if (this.$route.params.city.toLowerCase() !== city.toLowerCase()) {
        try {
          await this.$router.push(`/${city}`);
        } catch (error) {
          console.error('Navigation error:', error);
        }
      }
    },
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    
    updateLocation(location) {
      this.$route.params.city = location.name; // Update the location in the homepage
      this.fetchData(); // Fetch data for the new location
    },
    getCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    },
    getFormattedDate() {
      const now = new Date();
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      return now.toLocaleDateString(undefined, options);
    },
    handleClickOutside(event) {
    const sidebarElement = this.$refs.sidebar.$el || this.$refs.sidebar; 
    if (
    this.isSidebarVisible &&
    sidebarElement &&
    !sidebarElement.contains(event.target)
   ) {
    this.isSidebarVisible = false;
     }
    },

    getUvIndex(index) {
      switch (index) {
        case 1:
        case 2:
          return "Low";
        case 3:
        case 4:
        case 5:
          return "Moderate";
        case 6:
        case 7:
          return "High";
        case 8:
        case 9:
        case 10:
          return "Very High";
        case 11:
        case 12:
        case 13:
        case 14:
          return "Extreme";
        default:
          return "Invalid";
      }
    },
    async fetchData() {
      const apiString = process.env.VUE_APP_API_URL + "/" + this.$route.params.city.toUpperCase() + 
        ",PH?unitGroup=metric&key=" + process.env.VUE_APP_API_KEY + "&contentType=json&elements=%2Baqius";
      const currentTime = new Date().getHours();
      try {
        console.log(this.$route.params.city.toLowerCase())
        const response = await axios.get(apiString);
        const data = response.data;
        this.apiData = response.data;
        this.todayInformation = this.apiData.days[0];
        this.hourInformation = this.todayInformation.hours[currentTime];
        this.todayInformation = this.apiData.days[0];
        this.hourInformation = this.todayInformation.hours[currentTime];
        if (data && data.currentConditions && data.currentConditions.temp) {
        const temperature = data.currentConditions.temp; 
        this.temperature = temperature;
        this.isLocationAdded = this.searchForCity(this.$route.params.city.toLowerCase());
      } else {
        console.error("Temperature data not found in the response:", data);
      }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    searchForCity(cityName){
      for (let i = 0; i < this.locations.length; i++) {
        // Check if the 'name' property matches the search string
        if (this.locations[i].name.toLowerCase() === cityName) {
          return true;
        }
      }
      return false
    },
    convertTo12HourFormat(time24) {
      if (time24 === undefined) return "undefined";
      
      const [hours, minutes] = time24.split(':').map(Number);
      const suffix = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12;
      return `${hours12}:${minutes.toString().padStart(2, '0')} ${suffix}`;
    },
    addLocation(location) {
      const updatedLocations = [...this.locations, location];
      this.locations = updatedLocations;
      Cookies.set('locations', JSON.stringify(updatedLocations));
    },
    removeLocation(locationName) {
      const updatedLocations = this.locations.filter(loc => loc.name !== locationName);
      this.locations = updatedLocations;
      Cookies.set('locations', JSON.stringify(updatedLocations));
    },
    getLocationsFromCookies() {
      const savedLocations = Cookies.get('locations');
      this.locations = savedLocations ? JSON.parse(savedLocations) : []
    }
  },
  mounted() {
    this.timeInterval = setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
    document.addEventListener('click', this.handleClickOutside);
    this.getLocationsFromCookies();
    for (let i = 0; i < this.locations.length; i++) {
      // Check if the 'name' property matches the search string
      if (this.locations[i].name.toLowerCase() === this.$route.params.city.toLowerCase()) {
        this.isLocationAdded = true;
      }
    }
  },
};
</script>

<style scoped>
.relative {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.sidebar-slide-enter-active,
.sidebar-slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.sidebar-slide-enter,
.sidebar-slide-leave-to {
  transform: translateX(100%);
}

.sidebar-slide-enter-to,
.sidebar-slide-leave {
  transform: translateX(0);
}

.tooltip-button {
  position: relative;
  padding: 8px;
  background-color: transparent;
  border: none;
  text-align: center;
  cursor: pointer;
}

.star-icon {
  font-size: 1.7rem;
}

.star-icon.added {
  color: #d1a300;
}

.star-icon.not-added {
  color: black;
}

 
/* Tooltip Text */
.tooltip-text {
  position: absolute;
  bottom: -40px; 
  left: 50%;
  transform: translateX(-50%);
  background-color: #e6e4e4; 
  color: black;
  padding: 10px 10px;
  border-radius: 25px;
  font-size: 0.875rem; /* Small font size */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  width: 200px;
  text-align: center;
  z-index: 10;
}

.tooltip-button:hover .tooltip-text {
  opacity: 1;
  visibility: visible;
}

</style>