<template>
    <div class="p-4 space-x-4 flex">
      <!-- Air Quality -->
      <div class="flex flex-col items-center border border-black w-[386px] h-[204px] p-4 space-y-4 rounded-[25px]">
        <span class="text-[24px] text-black">Air Quality</span>
        <span class="text-[32px] text-black">{{getAqIndex(aq)}} ({{aq}})</span>
        <div class="w-full h-[20px] bg-[#D9D9D9] rounded">
          <div :class="['h-full', ` w-[${Math.floor((aq / 300) * 100)}%]`, `bg-[${getAqColor(aq)}]`, 'rounded']"></div> 
        </div>
      </div>
      <!-- ${(150 / 300) * 100} -->
      <!-- `bg[#${getAqColor(aq)}]` -->
  
      <!-- Sunrise and Sunset -->
      <div class="flex flex-col items-center border border-black w-[386px] h-[204px] p-4 space-y-4 rounded-[25px]">
        <!-- Sunrise -->
        <div class="flex items-center space-x-2">
          <font-awesome-icon icon="fa-sun" class="text-[24px] text-black" />
          <span class="text-[24px] text-black">Sunrise</span>
        </div>
        <span class="text-[32px] text-black">{{sunrise}}</span>
        <!-- Divider -->
        <div class="w-full h-[1px] bg-black"></div>
        <!-- Sunset -->
        <span class="text-[20px] text-black">Sunset: {{sunset}}</span>
      </div>
  
      <!-- Dew Point and Pressure -->
      <div class="flex flex-col justify-center items-center border border-black w-[386px] h-[204px] p-10 space-y-4 rounded-[25px]">
        <!-- Dew Point -->
        <div class="flex justify-between w-full items-center">
          <div class="flex items-center space-x-2">
            <font-awesome-icon icon="fa-temperature-high" class="text-[24px] text-black" />
            <span class="text-[24px] text-black">Dew Point</span>
          </div>
          <span class="text-[32px] text-black">{{dew}}°</span>
        </div>
        <!-- Pressure -->
        <div class="flex justify-between w-full items-center">
          <div class="flex items-center space-x-2">
            <font-awesome-icon icon="fa-arrows-alt-v" class="text-[24px] text-black" />
            <span class="text-[24px] text-black">Pressure</span>
          </div>
          <span class="text-[32px] text-black">{{pressure}} mb</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "WeatherAdditionalInfo",
    props: {
      aq: {
        type: String,
        required: true,
      },
      sunrise: {
        type: String,
        required: true,
      },
      sunset: {
        type: String,
        required: true,
      },
      dew: {
        type: String,
        required: true,
      },
      pressure: {
        type: String,
        required: true,
      },
    },
    methods:{
      getAqIndex(aqi){
        if (aqi >= 0 && aqi <= 50) {
            return "Good"; // Green
        } else if (aqi >= 51 && aqi <= 100) {
            return "Moderate"; // Yellow
        } else if (aqi >= 101 && aqi <= 150) {
            return "Unhealthy"; // Orange
        } else if (aqi >= 151 && aqi <= 200) {
            return "Unhealthy"; // Red
        } else if (aqi >= 201 && aqi <= 300) {
            return "Very Unhealthy"; // Purple
        } else if (aqi > 300) {
            return "Hazardous"; // Maroon
        } else {
            return "Invalid AQI"; // Error case
        }
      },
      getAqColor(aqi){
        if (aqi >= 0 && aqi <= 50) {
            return "#00ff00"; // Green
        } else if (aqi >= 51 && aqi <= 100) {
            return "#FFFF00"; // Yellow
        } else if (aqi >= 101 && aqi <= 150) {
            return "#FFA500"; // Orange
        } else if (aqi >= 151 && aqi <= 200) {
            return "#FF0000"; // Red
        } else if (aqi >= 201 && aqi <= 300) {
            return "#A020F0"; // Purple
        } else if (aqi > 300) {
            return "#800000"; // Maroon
        } else {
            return "Invalid AQI"; // Error case
        }
      },
    }
  };
  </script>
  