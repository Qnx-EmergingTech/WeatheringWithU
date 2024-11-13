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
        forecast: [
          { date: 'Nov 12', label: 'Today', icon: 'cloud', condition: 'Cloudy', minTemp: 28, maxTemp: 32 },
          { date: 'Nov 13', label: 'Tomorrow', icon: 'sun', condition: 'Sunny', minTemp: 27, maxTemp: 31 },
          { date: 'Nov 14', label: 'Thursday', icon: 'cloud-rain', condition: 'Rainy', minTemp: 25, maxTemp: 30 },
          { date: 'Nov 15', label: 'Friday', icon: 'cloud', condition: 'Cloudy', minTemp: 28, maxTemp: 32 },
          { date: 'Nov 16', label: 'Saturday', icon: 'sun', condition: 'Sunny', minTemp: 27, maxTemp: 31 },
          { date: 'Nov 17', label: 'Sunday', icon: 'cloud-rain', condition: 'Rainy', minTemp: 25, maxTemp: 30 },
          { date: 'Nov 19', label: 'Monday', icon: 'sun', condition: 'Sunny', minTemp: 27, maxTemp: 31 },

        ],
      };
    },
  };
  </script>

  