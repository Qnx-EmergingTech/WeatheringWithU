<template>
    <div class="p-4 flex space-x-4">
      <!-- First Column: Temperature and Condition -->
      <div class="flex flex-col items-center h-[150px] w-[243px] justify-center p-4">
        <span class="font-bold text-2xl text-black text-[96px] mb-6 mt-4">{{temperature}}°</span>
        <span class="text-[32px] text-black mt-2">{{conditions}}</span>
      </div>
  
      <!-- UV Index -->
      <div class="flex flex-col items-center h-[150px] w-[243px] justify-center border-2 border-black rounded-[25px] p-4">
        <div class="flex items-center mb-2">
            <font-awesome-icon icon="fa-sun" class="text-xl text-black mr-2" />
            <span class="text-[24px] text-black">UV Index</span>
        </div>
        <span class="text-[32px] text-black">{{uv}}</span>
        </div>
  
    <!-- Wind -->
    <div class="flex flex-col items-center h-[150px] w-[243px] justify-center border-2 border-black rounded-[25px] p-4">
    <div class="flex items-center mb-2">
        <font-awesome-icon icon="fa-wind" class="text-xl text-black mr-2" />
        <span class="text-[24px] text-black">Wind</span>
    </div>
    <div class="flex items-center">
        <font-awesome-icon icon="fa-arrow-right" class="text-[32px] text-black ml-2" />
        <span class="text-[32px] text-black"> {{ wind }} km/h</span>

    </div>
    </div>

    <!-- Humidity -->
    <div class="flex flex-col items-center h-[150px] w-[243px] justify-center border-2 border-black rounded-[25px] p-4">
      <div class="flex items-center mb-2">
        <font-awesome-icon icon="fa-tint" class="text-xl text-black mr-2" />
        <span class="text-[24px] text-black">Humidity</span>
      </div>
      <span class="text-[32px] text-black">{{humidity}}%</span>
    </div>

    <!-- Visibility -->
    <div class="flex flex-col items-center h-[150px] w-[243px] justify-center border-2 border-black rounded-[25px] p-4">
      <div class="flex items-center mb-2">
        <font-awesome-icon icon="fa-eye" class="text-xl text-black mr-2" />
        <span class="text-[24px] text-black">Visibility</span>
      </div>
      <span class="text-[32px] text-black">{{visibility}} km</span>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'WeatherStats',
    props: {
      temperature: {
        type: String,
        required: true,
      },
      uv: {
        type: String,
        required: true,
      },
      wind: {
        type: String,
        required: true,
      },
      humidity: {
        type: String,
        required: true,
      },
      visibility: {
        type: String,
        required: true,
      },
      conditions: {
        type: String,
        required: true,
      },
    }
  }
  </script>
  