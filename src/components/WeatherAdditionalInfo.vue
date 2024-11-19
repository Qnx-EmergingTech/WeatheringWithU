<template>
    <div class="p-4 space-x-4 flex">
      <!-- Air Quality -->
      <div class="flex flex-col items-center border border-black w-[386px] h-[204px] p-4 space-y-4 rounded-[25px]">
        <span class="text-[24px] text-black">Air Quality</span>
        <span class="text-[32px] text-black">Low ({{aq}})</span>
        <div class="w-full h-[20px] bg-[#D9D9D9] rounded">
          <div class="h-full w-[20%] bg-[#197BDD] rounded"></div> 
        </div>
      </div>
  
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
    }
  };
  </script>
  