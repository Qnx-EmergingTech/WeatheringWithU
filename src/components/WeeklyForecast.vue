<template>
    <div class="w-full p-4 bg-gray-700 bg-opacity-75 rounded-lg text-white">
        <div
          v-for="day in forecast"
          :key="day.date"
          class="grid grid-cols-4 items-center justify-between p-2 space-x-4"
        >
          <!-- Date -->
        <span class="text-lg font-medium text-left">{{ day.date }}</span>

        <!-- Day Label -->
        <span class="text-lg font-medium text-left">{{ day.label }}</span>

         <!-- Weather Icon -->
        <font-awesome-icon :icon="day.icon" class="h-6 w-6 text-center mx-auto" />

         <!-- Temperature Range -->
         <span class="text-lg font-semibold text-right">{{ day.minTemp }}°C / {{ day.maxTemp }}°C</span>
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
          const dayDate = nextDay.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          const dayLabel = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : daysOfWeek[nextDay.getDay()]; 
  
          forecastDays.push({
            date: dayDate,
            label: dayLabel,
            ...staticForecastData[i], // Static Data 
          });
        }
  
        return forecastDays;
      },
    },
  };
  </script>