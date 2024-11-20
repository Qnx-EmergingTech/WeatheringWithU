<template>
  <div class="relative w-full h-screen flex flex-col bg-cover bg-center justify-center items-center px-[100px] pt-[72px] pb-[36px]"
    :style="{ backgroundImage: `url(${imageUrl})` }">
    <!-- Side Navigation Bar -->
     <transition name="sidebar-slide">
      <div v-show="isSidebarVisible" class="h-screen w-[302px] absolute top-0 right-0 bg-black z-50 p-12 transition-all duration-300 ease-in-out" :style="{ backgroundImage: `url(${imageUrl})` }" ref="sidebar" >
        <div class="flex flex-col h-screen w-full gap-10">
          <!-- Search Bar -->
          <div class="w-full flex justify-end">
            <font-awesome-icon icon="magnifying-glass" class="" />
          </div>
          <!-- Locations -->
          <div class="flex flex-col h-auto gap-4">
            <div class="w-full flex justify-between">
              <div class="w-1/2 flex gap-2 items-center">
                <font-awesome-icon icon="location-pin" class="" />
                <spam>Lipa</spam>
              </div>
              <span>24°C</span>
            </div>
            <div class="w-full flex justify-between">
              <div class="w-1/2 flex gap-2 items-center">
                <font-awesome-icon icon="location-pin" class="" />
                <spam>Lipa</spam>
              </div>
              <span>24°C</span>
            </div>
            <div class="w-full flex justify-between">
              <div class="w-1/2 flex gap-2 items-center">
                <font-awesome-icon icon="location-pin" class="" />
                <spam>Lipa</spam>
              </div>
              <span>24°C</span>
            </div>
            <div class="w-full flex justify-between">
              <div class="w-1/2 flex gap-2 items-center">
                <font-awesome-icon icon="location-pin" class="" />
                <spam>Lipa</spam>
              </div>
              <span>24°C</span>
            </div>
          </div>
          <div class="border-2 border-black bg-opacity-0 h-auto w-full text-center rounded-full">
            Manage Locations
          </div>
        </div>
      </div>
     </transition>
    <!-- Header -->
    <div class="w-full h-full text-black z-10 flex flex-col">
      <div class="h-auto flex flex-col justify-evenly gap-4">
        <div class="w-full text-black flex flex-row justify-between">
          <span>WeatheringWithU</span>
          <button @click.stop="toggleSidebar" class="p-2 bg-opacity-0 text-black rounded">
            <font-awesome-icon icon="bars" class="" />
          </button>
        </div>
        <div class="w-full flex flex-col items-center gap-4 justify-center font-thin">
          <SearchComponent />
          <div class="bg-opacity-0 h-auto w-[200px] justify-center items-center text-center text-[10rem] font-bold flex gap-3">
            <font-awesome-icon icon="location-pin" class="" />
            <span>{{ $route.params.city.toUpperCase() }}</span>
          </div>
          <div class="bg-opacity-0 h-auto w-auto text-center text-[2rem] font-thin flex">
            <span>{{ formattedDate }}</span>
          </div>
        </div>
      </div>

      <div class="flex-grow overflow-y-auto w-full">
        <!-- WeatherStats -->
        <div class="flex justify-center items-center mt-16">
          
          <WeatherStats :temperature="String(hourInformation.temp)" :uv="getUvIndex(hourInformation.uvindex)" :wind="String(hourInformation.windspeed)" :humidity="String(hourInformation.humidity)" :visibility="String(hourInformation.visibility)" :conditions="String(hourInformation.conditions)"/>
        </div>

        <!-- Hourly and Weekly Forecast -->
        <div class="flex flex-row justify-center gap-4 mt-8">
          <!-- Hourly Forecast -->
          <div class="flex flex-col items-center">
            <HourlyForecast :hours="todayInformation.hours"/>
          </div>

          <!-- Weekly Forecast -->
          <div class="flex flex-col items-center">
            <WeeklyForecast :days="apiData.days"/>
          </div>
        </div>

        <!-- WeatherAdditionalInfo -->
        <div class="flex flex-col items-center mt-8">
          <WeatherAdditionalInfo :aq="String(hourInformation.aqius)" :sunrise="convertTo12HourFormat(todayInformation.sunrise)" :sunset="convertTo12HourFormat(todayInformation.sunset)" :dew="String(todayInformation.dew)" :pressure="String(todayInformation.pressure)"/>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import WeeklyForecast from '@/components/WeeklyForecast.vue';
import HourlyForecast from '@/components/HourlyForecast.vue';
import WeatherStats from '@/components/WeatherStats.vue';
import WeatherAdditionalInfo from '@/components/WeatherAdditionalInfo.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import axios from 'axios';


export default {
  name: 'HomePage',
  components: { WeeklyForecast, HourlyForecast, WeatherStats, WeatherAdditionalInfo, SearchComponent},
  data() {
    return {
      isSidebarVisible: false, // controls visibility of the sidebar
      imageUrl: 'https://images.unsplash.com/photo-1668853853439-923e013afff1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      currentTime: this.getCurrentTime(), // Initialize with current time
      formattedDate: this.getFormattedDate(),
      apiData: {},
      todayInformation: {},
      hourInformation: {}
    };
  },
  mounted() {
    // Listen for clicks outside the sidebar
    this.timeInterval = setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
    document.addEventListener('click', this.handleClickOutside);
    this.fetchData();
  },
  beforeUnmount() {  
    clearInterval(this.timeInterval);
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible; // Toggle visibility on button click
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
      if (this.isSidebarVisible && !this.$refs.sidebar.contains(event.target)) {
        this.isSidebarVisible = false; // Close sidebar if clicked outside
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
      const apiString = process.env.VUE_APP_API_URL + "/" +this.$route.params.city.toUpperCase() + ",PH?unitGroup=metric&key=" + process.env.VUE_APP_API_KEY + "&contentType=json&elements=%2Baqius ";
      const currentTime = new Date().getHours();
      try {
        const response = await axios.get(apiString);
        this.apiData = response.data;
        this.todayInformation = this.apiData.days[0]
        this.hourInformation = this.todayInformation.hours[currentTime]
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    convertTo12HourFormat(time24) {
      if (time24 === undefined)
        return "undefined";
      const [hours, minutes] = time24.split(':').map(Number); // Split and convert parts to numbers
      const suffix = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12; // Convert to 12-hour format, replacing 0 with 12
      return `${hours12}:${minutes.toString().padStart(2, '0')} ${suffix}`;
    },
  }
};
</script>

<style>
.relative {
  position: relative;
  height: 100%;
  overflow: hidden;
}
/* Custom Transition classes for sliding in and out */
.sidebar-slide-enter-active,
.sidebar-slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.sidebar-slide-enter, 
.sidebar-slide-leave-to /* .sidebar-slide-leave-active in <2.1.8 */ {
  transform: translateX(100%);
}

.sidebar-slide-enter-to,
.sidebar-slide-leave {
  transform: translateX(0);
}
</style>


