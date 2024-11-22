<template>
    <div class="w-full p-4">
      <!-- Hourly Forecast Heading -->
      <div class="text-black text-[24px] mb-4">
        Hourly Forecast
      </div>
  
      <!-- Hourly Forecast -->
      <div class="w-full max-w-[717px] max-h-[280px] h-full bg-opacity-0 rounded-lg border border-black rounded-[25px] overflow-x-auto flex items-center gap-4">
        <!-- Scrollable container for hourly forecast -->
          <div
            v-for="hour in hourlyForecast"
            :key="hour.time"
            class="bg-opacity-0 h-36 sm:h-44 lg:h-56 w-26 sm:w-34 lg:w-42 p-2 flex flex-col items-center justify-evenly gap-10"
          >
            <span class="text-[14px] text-black">{{ hour.time }}</span>
            <img :src="getIconUrl(hour.icon)" alt="Icon" class="w-40 h-40" />
            <span class="text-[32px] text-black ">{{ Math.floor(hour.temp) }}°</span>
          </div>
        </div>
      </div>

  </template> 
  
  <script>
  export default {
    data() {
      return {
        // Sample data for hourly forecast
        hourlyForecast: [],
      };
    },
    mounted() {
    },
    props:{
      hours: {
        type: Array,
        required: true,
      },
    },
    watch: {
      hours: {
        handler(newValue) {
          if (newValue && newValue.length) {
            this.populateHourlyForecast(newValue);
          }
        },
        immediate: true, // Runs the handler immediately if data is already available
      },
    },
    methods: {
      populateHourlyForecast(array) {
        // Process the array data
        this.hourlyForecast = array.map(item => ({
          time: `${item.datetime.split(":")[0] % 12 || 12} ${item.datetime.split(":")[0] >= 12 ? "PM" : "AM"}`,
          icon: item.icon,
          temp: item.temp,
        }));
      },
      getIconUrl(iconName) {
        return require(`@/assets/icons/${iconName}.svg`);
      },
    },
  };
  </script>
  