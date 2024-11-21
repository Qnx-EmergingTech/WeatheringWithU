<template>
    <transition name="sidebar-slide">
      <div
        v-show="isVisible"
        class="h-screen w-[302px] absolute top-0 right-0 bg-black z-50 p-12 transition-all duration-300 ease-in-out"
        :style="{ backgroundImage: `url(${imageUrl})` }"
        ref="sidebar"
      >
        <div class="flex flex-col h-screen w-full gap-10 mt-12">
          <!-- Locations -->
          <div class="flex flex-col h-auto gap-4">
            <div
              v-for="(location, index) in locationsWithManageability"
              :key="index"
              class="w-full flex justify-between text-[20px]" 
              @click.stop
            >
              <div class="w-1/2 flex gap-2 items-center">
                <font-awesome-icon icon="location-pin" />
                <span>{{ location.name }}</span>
              </div>
  
              <!-- Show trash icon in manage mode or show temperature in normal mode -->
              <span v-if="manageMode" class="cursor-pointer" @click="removeLocation(index)">
                <font-awesome-icon icon="fa-trash"/>
              </span>
              <span v-else>{{ location.temp }}°C</span>
            </div>
          </div>
  
          <!-- Manage Locations Button -->
          <button
            class="border-2 border-black bg-opacity-0 h-auto w-full text-center rounded-full py-2"
            @click="toggleManageMode"
          >
            {{ manageMode ? 'Done' : 'Manage Locations' }}
          </button>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  import Cookies from "js-cookie";
  
  export default {
    name: "SidebarComponent",
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
      locations: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        manageMode: false, 
        localLocations: this.locations, 
      };
    },
    methods: {
      toggleManageMode() {
        this.manageMode = !this.manageMode; 
      },
  
      removeLocation(index) {
        const updatedLocations = [...this.localLocations]; 
        updatedLocations.splice(index, 1);
  
        
        this.localLocations = updatedLocations;
        this.updateLocationsCookie(updatedLocations);
      },

      updateLocationsCookie(locations) {
        Cookies.set("locations", JSON.stringify(locations));
        this.$emit("update-locations", locations); 
      },
  },
    computed: {
      locationsWithManageability() {
        return this.localLocations.map((location) => ({
          ...location,
          isManageable: this.manageMode,
        }));
      },
    },
    watch: {
      locations(newLocations) {
        this.localLocations = newLocations;
      },
      isVisible(newVal) {
        if (newVal) {
          this.$nextTick(() => {
            document.addEventListener("click", this.handleClickOutside);
          });
        } else {

          document.removeEventListener("click", this.handleClickOutside);
        }
      },
    },
    mounted() {
      const savedLocations = Cookies.get("locations");
      if (savedLocations) {
        const locations = JSON.parse(savedLocations);
        this.localLocations = locations;
        this.$emit("update-locations", locations); 
      }
    },
    beforeUnmount() {
      // Clean up event listener on unmount
      document.removeEventListener("click", this.handleClickOutside);
    },
  };
  </script>
  
  <style scoped>
  /* Transition styles */
  .sidebar-slide-enter-active,
  .sidebar-slide-leave-active {
    transition: transform 0.3s ease-in-out;
  }
  .sidebar-slide-enter,
  .sidebar-slide-leave-to {
    transform: translateX(100%);
  }
  .sidebar-slide-enter-to,
  .sidebar-slide-leave {
    transform: translateX(0);
  }
  </style>
  