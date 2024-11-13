<template>
  <div class="relative w-full h-screen flex flex-col bg-cover bg-center justify-center items-center"
    :style="{ backgroundImage: `url(${imageUrl})` }">
    <!-- Weather information on top of the background image -->
    <div class="w-full h-full text-white z-10 flex flex-col justify-center items-center p-6 sm:p-20">
      <div class="flex items-center space-x-2 sm:space-x-4 justify-center">
        <!-- Time -->
        <div class="text-[40px] sm:text-[60px] lg:text-[90px] font-bold">{{ currentTime }}</div>

        <!-- Divider  -->
        <div class="text-[100px] sm:text-[150px] lg:text-[250px] -mt-4 sm:-mt-8 lg:-mt-10">|</div>

        <!-- Location  -->
        <div class="text-[60px] sm:text-[140px] lg:text-[239px] font-bold relative text-center">
          Manila

          <!-- Temperature  -->
          <div
            class="absolute top-[-20px] sm:top-[-30px] lg:top-[50px] right-[-60px] sm:right-[-100px] lg:right-[-140px] text-[50px] sm:text-[80px] lg:text-[100px] font-bold leading-none">
            28<span class="text-[20px] sm:text-[25px] lg:text-[30px]">°C</span>
          </div>

          <!-- Weather  -->
          <div
            class="absolute top-[-50px] sm:top-[-70px] lg:top-[50px] right-[-100px] sm:right-[-200px] lg:right-[-250px] text-[20px] sm:text-[30px] lg:text-[40px] font-bold">
            Cloudy
          </div>
        </div>
      </div>

    <!-- Weather forecast -->
    <div class="absolute bottom-10 left-0 w-full px-6 sm:px-20 text-white z-20">
      <div class="flex flex-row justify-center gap-4 lg:gap-8">
        <!-- Weather forecast blocks -->
        <div class="flex flex-row flex-wrap justify-center gap-4 lg:gap-6">
          <div class="bg-[#777777] bg-opacity-75 h-36 sm:h-44 lg:h-56 w-24 sm:w-32 lg:w-40 p-2">
            <div class="h-full w-full flex flex-col justify-evenly items-center">
              <span class="text-sm sm:text-lg lg:text-xl">00:00</span>
              <span class="tracking-wider text-xs sm:text-sm lg:text-base">CLOUDY</span>
            </div>
          </div>
          <div class="bg-[#777777] bg-opacity-75 h-36 sm:h-44 lg:h-56 w-24 sm:w-32 lg:w-40 p-2">
            <div class="h-full w-full flex flex-col justify-evenly items-center">
              <span class="text-sm sm:text-lg lg:text-xl">00:00</span>
              <span class="tracking-wider text-xs sm:text-sm lg:text-base">CLOUDY</span>
            </div>
          </div>
          <div class="bg-[#777777] bg-opacity-75 h-36 sm:h-44 lg:h-56 w-24 sm:w-32 lg:w-40 p-2">
            <div class="h-full w-full flex flex-col justify-evenly items-center">
              <span class="text-sm sm:text-lg lg:text-xl">00:00</span>
              <span class="tracking-wider text-xs sm:text-sm lg:text-base">CLOUDY</span>
            </div>
          </div>
          <div class="bg-[#777777] bg-opacity-75 h-36 sm:h-44 lg:h-56 w-24 sm:w-32 lg:w-40 p-2">
            <div class="h-full w-full flex flex-col justify-evenly items-center">
              <span class="text-sm sm:text-lg lg:text-xl">00:00</span>
              <span class="tracking-wider text-xs sm:text-sm lg:text-base">CLOUDY</span>
            </div>
          </div>
          <div class="bg-[#777777] bg-opacity-75 h-36 sm:h-44 lg:h-56 w-24 sm:w-32 lg:w-40 p-2">
            <div class="h-full w-full flex flex-col justify-evenly items-center">
              <span class="text-sm sm:text-lg lg:text-xl">00:00</span>
              <span class="tracking-wider text-xs sm:text-sm lg:text-base">CLOUDY</span>
            </div>
          </div>
          <div class="bg-[#777777] bg-opacity-75 h-36 sm:h-44 lg:h-56 w-24 sm:w-32 lg:w-40 p-2">
            <div class="h-full w-full flex flex-col justify-evenly items-center">
              <span class="text-sm sm:text-lg lg:text-xl">00:00</span>
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
      imageUrl: 'https://preview.redd.it/xssm0vgpbph31.jpg?auto=webp&s=8f89c8e02c2d39bf8cd692f89abd22437df4d8f6',
      currentTime: this.getCurrentTime() // Initialize with current time
    };
  },
  mounted() {
    this.timeInterval = setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
  },
  beforeUnmount() {  
    clearInterval(this.timeInterval);
  },
  methods: {
    getCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  }
};
</script>


