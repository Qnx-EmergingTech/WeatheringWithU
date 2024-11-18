<template>
    <div class="w-full p-4">
      <!-- Hourly Forecast Heading -->
      <div class="text-black text-[24px] mb-4">
        Hourly Forecast
      </div>
  
      <!-- Hourly Forecast -->
      <div class="w-full max-w-[717px] max-h-[280px] h-full bg-opacity-0 rounded-lg border border-black rounded-[25px] overflow-x-auto flex items-center">
        <!-- Scrollable container for hourly forecast -->
      
          <div
            v-for="hour in hourlyForecast"
            :key="hour.time"
            class="bg-opacity-0 h-36 sm:h-44 lg:h-56 w-24 sm:w-32 lg:w-40 p-2 flex flex-col items-center justify-evenly gap-10"
          >
            <span class="text-[20px] text-black">{{ hour.time }}</span>
            <font-awesome-icon :icon="hour.icon" class="text-[48px] text-black text-[48px]" />
            <span class="text-[32px] text-black ">{{ hour.temp }}</span>
          </div>
        </div>
      </div>

  </template> 
  
  <script>
  export default {
    data() {
      return {
        // Sample data for hourly forecast
        hourlyForecast: [
          { time: '1 pm', icon: 'cloud', temp: '29°' },
          { time: '2 pm', icon: 'cloud', temp: '29°' },
          { time: '3 pm', icon: 'cloud', temp: '29°' },
          { time: '4 pm', icon: 'cloud', temp: '29°' },
          { time: '5 pm', icon: 'cloud', temp: '29°' },
          { time: '6 pm', icon: 'cloud', temp: '29°' },
          { time: '7 pm', icon: 'cloud', temp: '29°' },
          { time: '8 pm', icon: 'cloud', temp: '29°' },
        ],
      };
    },
  };
  </script>
  