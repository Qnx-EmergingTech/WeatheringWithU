<template>
  <div class="w-full flex flex-col items-center gap-4 justify-center font-thin">
    <div class="search-container">
      <input
        v-model="searchQuery"
        @input="onSearchInput"
        @focus="onFocus"
        placeholder="Search for a city"
        type="text"
        class="search-input"
      />
      <ul v-if="Array.isArray(filteredCities) && filteredCities.length && searchQuery" class="suggestions">
        <li
          v-for="city in filteredCities"
          :key="city.Key"
          @click="selectCity(city)"
          class="suggestion-item"
        >
          {{ city.LocalizedName }}, {{ city.Country.LocalizedName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchComponent",
  emits: ['location-selected'],
  data() {
    return {
      searchQuery: "",
      filteredCities: [],
      selectedCity: null,
      debounceTimeout: null,
    };
  },
  methods: {
    onSearchInput() {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.fetchCities();
      }, 700);
    },
    async fetchCities() {
      const apiKey = process.env.VUE_APP_SECOND_API_KEY;
      const apiUrl = process.env.VUE_APP_SECOND_API_URL;

      const url = `${apiUrl}?apikey=${apiKey}&q=${this.searchQuery}`;
      
      try {
        const response = await axios.get(url);
        this.filteredCities = Array.isArray(response.data) ? response.data : [];
      } catch (error) {
        console.error("Error fetching cities:", error);
        this.filteredCities = [];
      }
    },
    onFocus() {
      if (!this.searchQuery) {
        this.filteredCities = [];
      }
    },
    selectCity(city) {
      this.selectedCity = city;
      this.searchQuery = `${city.LocalizedName}, ${city.Country.LocalizedName}`;
      this.filteredCities = [];
      
      this.$emit('location-selected', city.LocalizedName);
    },
  },
};
</script>

<style scoped>
.search-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  color: Black;
}

.search-input {
  width: 100%;
  padding: 12px;
  border-radius: 25px;
  border: 2px solid black;
  background: transparent;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  text-align: center;
}

::placeholder {
  color: black;
  opacity: 1; /* Firefox */
}

.search-input:focus {
  border-color: #007bff;
  outline: none;
}

ul.suggestions {
  position: absolute;
  top: 55px;
  left: 0;
  right: 0;
  max-height: 250px;
  overflow-y: auto;
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: white;
  z-index: 10;
}

.suggestion-item {
  padding: 12px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  text-align: center;
}

.suggestion-item:hover {
  background-color: #f0f8ff;
}

.suggestion-item:active {
  background-color: #cce5ff;
}
</style>