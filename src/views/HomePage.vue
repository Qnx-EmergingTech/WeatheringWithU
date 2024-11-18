<template>
  <div class="relative w-full h-screen flex flex-col bg-cover bg-center justify-center items-center px-[100px] py-[72px]"
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
          <button @click.stop="toggleSidebar" class="p-2 bg-opacity-0 text-black rounded"><font-awesome-icon icon="bars" class="" /></button>
        </div>
        <div class="w-full flex flex-col items-center gap-4 justify-center font-thin">
          <div class="border-2 border-black bg-opacity-0 h-auto w-[20rem] text-center rounded-full">
            Search City
          </div>
          <div class="bg-opacity-0 h-auto w-[200px] justify-center items-center text-center text-[10rem] font-bold flex gap-3">
            <font-awesome-icon icon="location-pin" class="" />
            <span>{{ $route.params.city.toUpperCase() }}</span>
          </div>
          <div class="bg-opacity-0 h-auto w-auto text-center text-[2rem] font-thin flex">
            <span>Thursday, 14 November 2023</span>
          </div>
        </div>
      </div>
      
    <!-- Weather forecast -->
    <div class="absolute bottom-10 left-0 w-full px-6 sm:px-20 text-white z-20">
      <div class="flex flex-row justify-center gap-4 lg:gap-8">
        <!-- Weather forecast blocks -->
        <div class="flex flex-row items-end gap-4 lg:gap-6">
          <div class="bg-gray-700 bg-opacity-75 h-36 sm:h-44 lg:h-56 w-24 sm:w-32 lg:w-40 p-2">
            <div class="h-full w-full flex flex-col justify-evenly items-center">
              <span class="text-sm sm:text-lg lg:text-xl">00:00</span>
              <font-awesome-icon icon="cloud" class="text-base sm:text-lg lg:text-5xl" />
              <span class="tracking-wider text-xs sm:text-sm lg:text-base">CLOUDY</span>
            </div>
          </div>
          <div class="bg-gray-700 bg-opacity-75 h-36 sm:h-44 lg:h-56 w-24 sm:w-32 lg:w-40 p-2">
            <div class="h-full w-full flex flex-col justify-evenly items-center">
              <span class="text-sm sm:text-lg lg:text-xl">00:00</span>
              <font-awesome-icon icon="cloud" class="text-base sm:text-lg lg:text-5xl" />
              <span class="tracking-wider text-xs sm:text-sm lg:text-base">CLOUDY</span>
            </div>
          </div>
          <div class="bg-gray-700 bg-opacity-75 h-36 sm:h-44 lg:h-56 w-24 sm:w-32 lg:w-40 p-2">
            <div class="h-full w-full flex flex-col justify-evenly items-center">
              <span class="text-sm sm:text-lg lg:text-xl">00:00</span>
              <font-awesome-icon icon="cloud" class="text-base sm:text-lg lg:text-5xl" />
              <span class="tracking-wider text-xs sm:text-sm lg:text-base">CLOUDY</span>
            </div>
          </div>
          <div class="bg-gray-700 bg-opacity-75 h-36 sm:h-44 lg:h-56 w-24 sm:w-32 lg:w-40 p-2">
            <div class="h-full w-full flex flex-col justify-evenly items-center">
              <span class="text-sm sm:text-lg lg:text-xl">00:00</span>
              <font-awesome-icon icon="cloud" class="text-base sm:text-lg lg:text-5xl" />
              <span class="tracking-wider text-xs sm:text-sm lg:text-base">CLOUDY</span>
            </div>
          </div>
          <div class="bg-gray-700 bg-opacity-75 h-36 sm:h-44 lg:h-56 w-24 sm:w-32 lg:w-40 p-2">
            <div class="h-full w-full flex flex-col justify-evenly items-center">
              <span class="text-sm sm:text-lg lg:text-xl">00:00</span>
              <font-awesome-icon icon="cloud" class="text-base sm:text-lg lg:text-5xl" />
              <span class="tracking-wider text-xs sm:text-sm lg:text-base">CLOUDY</span>
            </div>
          </div>
          <div class="bg-gray-700 bg-opacity-75 h-36 sm:h-44 lg:h-56 w-24 sm:w-32 lg:w-40 p-2">
            <div class="h-full w-full flex flex-col justify-evenly items-center">
              <span class="text-sm sm:text-lg lg:text-xl">00:00</span>
              <font-awesome-icon icon="cloud" class="text-base sm:text-lg lg:text-5xl" />
              <span class="tracking-wider text-xs sm:text-sm lg:text-base">CLOUDY</span>
            </div>
          </div>
        </div>

        <!-- Weekly Forecast component -->
        <div class="flex flex-col items-center mt-4 lg:mt-0">
          <WeeklyForecast />
        </div>
        
      </div>
    </div>
  </div>
 </div>
</template>



<script>
import WeeklyForecast from '@/components/WeeklyForecast.vue';

export default {
  name: 'HomePage',
  components: { WeeklyForecast },
  data() {
    return {
      isSidebarVisible: false, // controls visibility of the sidebar
      imageUrl: 'https://images.unsplash.com/photo-1668853853439-923e013afff1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      currentTime: this.getCurrentTime() // Initialize with current time
    };
  },
  mounted() {
    // Listen for clicks outside the sidebar
    this.timeInterval = setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
    document.addEventListener('click', this.handleClickOutside);
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
    handleClickOutside(event) {
      if (this.isSidebarVisible && !this.$refs.sidebar.contains(event.target)) {
        this.isSidebarVisible = false; // Close sidebar if clicked outside
      }
    }
  }
};
</script>

<style>
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


