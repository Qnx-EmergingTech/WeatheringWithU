<template>
  <nav class="weather-navbar w-full bg-gray-200 sticky top-0 z-50 flex justify-between items-center px-6 sm:px-10 py-4">
    <div class="logo text-black font-bold text-lg">
      WeatheringWithU
    </div>
    <div class="nav-links flex items-center gap-6">
      <button @click="openAboutUsModal" class="text-gray-800 hover:text-black transition-colors">About Us</button>
      <div
        class="search-container flex items-center border-2 border-gray-400 rounded-full px-4 py-1 focus-within:border-black">
        <input type="text" class="search-input flex-grow px-2 py-1 text-gray-800 bg-transparent focus:outline-none" />
        <button class="search-icon p-1 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.415l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387zM8 14A6 6 0 108 2a6 6 0 000 12z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <AboutUsModal :isVisible="isAboutUsModalVisible" @close="closeAboutUsModal" />
  </nav>
</template>

<script>
import AboutUsModal from './AboutUsModal.vue';

export default {
  name: 'WeatherNavbar',
  components: {
    AboutUsModal
  },
  data() {
    return {
      isAboutUsModalVisible: false
    };
  },
  methods: {
    openAboutUsModal() {
      this.isAboutUsModalVisible = true;
    },
    closeAboutUsModal() {
      this.isAboutUsModalVisible = false;
    }
  }
}
</script>

<style scoped>
.weather-navbar {
  background-color: #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 50;
}

.logo {
  font-size: 1.125rem;
  color: #000;
}
</style>
