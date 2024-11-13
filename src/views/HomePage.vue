<template>
  <div class="relative w-full h-screen">
    <!-- Full-screen background image -->
    <img 
      :src="imageUrl" 
      alt="Landing Page Image" 
      class="absolute top-0 left-0 w-full h-full object-cover z-10" 
    />

    <!-- Weather information -->
    <div class="absolute top-10 sm:top-20 left-6 sm:left-20 text-white z-20">
      <div class="flex items-center space-x-2 sm:space-x-4">
        <!-- Time -->
        <div class="text-[40px] sm:text-[60px] lg:text-[90px] font-bold">{{ currentTime }}</div>
        
        <!-- Divider  -->
        <div class="text-[100px] sm:text-[150px] lg:text-[250px] -mt-4 sm:-mt-8 lg:-mt-10">|</div>
        
        <!-- Location  -->
        <div class="text-[60px] sm:text-[140px] lg:text-[239px] font-bold relative">
          Manila

          <!-- Temperature  -->
          <div class="absolute top-[-20px] sm:top-[-30px] lg:top-[50px] right-[-60px] sm:right-[-100px] lg:right-[-140px] text-[50px] sm:text-[80px] lg:text-[100px] font-bold leading-none">
            28<span class="text-[20px] sm:text-[25px] lg:text-[30px]">°C</span>
          </div>

          <!-- Weather  -->
          <div class="absolute top-[-50px] sm:top-[-70px] lg:top-[50px] right-[-100px] sm:right-[-200px] lg:right-[-250px] text-[20px] sm:text-[30px] lg:text-[40px] font-bold">
            Cloudy
          </div>
        </div>
      </div>
    </div>

    <!-- Weekly Forecast -->
    <div class="absolute bottom-6 right-6 z-20">
      <WeeklyForecast />
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
