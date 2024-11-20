<template>
  <div class="w-full p-4">
    <!-- Weekly Forecast Heading -->
    <div class="text-black text-[24px] mb-4">
      Weekly Forecast
    </div>

    <!-- Forecast Box -->
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
        <img :src="getIconUrl(day.icon)" alt="Icon" class="w-8 h-8" />

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
        forecast: [],
      };
    },
    props:{
      days: {
        type: Array,
        required: true,
      },
    },
    watch: {
      days: {
        handler(newValue) {
          if (newValue && newValue.length) {
            this.forecast = this.generateForecast(newValue);
          }
        },
        immediate: true, // Runs the handler immediately if data is already available
      },
    },
    methods: {
      generateForecast(newValue) {
        console.log(newValue)
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
  
        const forecastDays = [];
        for (let i = 0; i < 7; i++) {
          const nextDay = new Date();
          nextDay.setDate(today.getDate() + i);
          const dayLabel = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : daysOfWeek[nextDay.getDay()]; 
  
          forecastDays.push({
            label: dayLabel,
            ...{ icon: newValue[i].icon, condition: newValue[i].condition, minTemp: Math.floor(newValue[i].tempmin), maxTemp: Math.floor(newValue[i].tempmax) }, // Static Data 
          });
        }
  
        return forecastDays;
      },
      getIconUrl(iconName) {
        return require(`@/assets/icons/${iconName}.svg`);
      },
    },
  };
  </script>