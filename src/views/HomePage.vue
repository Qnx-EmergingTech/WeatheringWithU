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

      <div class="flex flex-col items-center">
        <WeatherStats />
      </div>
      
    <!-- Weather forecast -->
    <div class="absolute bottom-10 left-0 w-full px-6 sm:px-20 text-white z-20">
      <div class="flex flex-row justify-center gap-1 lg:gap-2">
         <!-- Hourly Forecast component -->
        <div class="flex flex-col items-center mt-2 lg:mt-4">
          <HourlyForecast />
        </div>

        <!-- Weekly Forecast component -->
        <div class="flex flex-col items-center mt-2 lg:mt-4">
          <WeeklyForecast />
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center">
        <WeatherAdditionalInfo />
      </div>
  </div>
 </div>
</template>



<script>
import WeeklyForecast from '@/components/WeeklyForecast.vue';
import HourlyForecast from '@/components/HourlyForecast.vue';
import WeatherStats from '@/components/WeatherStats.vue';
import WeatherAdditionalInfo from '@/components/WeatherAdditionalInfo.vue';

export default {
  name: 'HomePage',
  components: { WeeklyForecast, HourlyForecast, WeatherStats, WeatherAdditionalInfo},
  data() {
    return {
      imageUrl: 'https://images.unsplash.com/photo-1668853853439-923e013afff1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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


