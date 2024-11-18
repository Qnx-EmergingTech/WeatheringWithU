<template>
  <div class="w-full p-4">
    <!-- Weekly Forecast Heading -->
    <div class="text-black text-[24px] mb-4">
      Weekly Forecast
    </div>

    <!-- Forecast Box with fixed size and responsiveness -->
    <div class="w-full max-w-[498px] max-h-[280px]  h-full w-full p-3 bg-opacity-0 rounded-lg border border-black rounded-[25px] overflow-x-auto pl-12 pr-12">
      <div
        v-for="day in forecast"
        :key="day.date"
        class="grid grid-cols-3 items-center justify-between p-1 space-x-4"
      >
        <!-- Day Label -->
        <span class="text-[20px] text-black font-light">
          {{ day.label }}
        </span>

        <!-- Weather Icon -->
        <font-awesome-icon :icon="day.icon" class="h-6 w-6 mx-auto text-black pl-12" />

        <!-- Temperature Range -->
        <span class="text-[20px] text-black font-light pl-12">
          {{ day.minTemp }}°  {{ day.maxTemp }}°
        </span>
      </div>
    </div>
  </div>
</template>

  
  <script>
  export default {
    name: 'WeeklyForecast',
    data() {
      return {
        forecast: this.generateForecast(),
      };
    },
    methods: {
      generateForecast() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        
        // Static data
        const staticForecastData = [
          { icon: 'cloud', condition: 'Cloudy', minTemp: 28, maxTemp: 32 },
          { icon: 'sun', condition: 'Sunny', minTemp: 27, maxTemp: 31 },
          { icon: 'cloud-rain', condition: 'Rainy', minTemp: 25, maxTemp: 30 },
          { icon: 'cloud', condition: 'Cloudy', minTemp: 28, maxTemp: 32 },
          { icon: 'sun', condition: 'Sunny', minTemp: 27, maxTemp: 31 },
          { icon: 'cloud-rain', condition: 'Rainy', minTemp: 25, maxTemp: 30 },
          { icon: 'sun', condition: 'Sunny', minTemp: 27, maxTemp: 31 },
        ];
  
        const forecastDays = [];
        for (let i = 0; i < 7; i++) {
          const nextDay = new Date();
          nextDay.setDate(today.getDate() + i);
          const dayLabel = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : daysOfWeek[nextDay.getDay()]; 
  
          forecastDays.push({
            label: dayLabel,
            ...staticForecastData[i], // Static Data 
          });
        }
  
        return forecastDays;
      },
    },
  };
  </script>