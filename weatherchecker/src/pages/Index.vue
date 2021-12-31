<template>
  <q-page class="flex column">
    <div class="col q-pt-lg q-px-md">
      <q-input
        v-model="search"
        @keyup.enter="getWeatherBySearch"
        placeholder="Search"
        dark
        borderless
      >
        <template v-slot:before>
          <q-icon
            name="my_location"
            @click="getLocation"
           />
        </template>

        <template v-slot:append>
          <q-btn
            @click="getWeatherBySearch"
            icon="search"
            round
            dense
            flat
          />
        </template>
      </q-input>
    </div>

    <template v-if="weatherData">
      <div class="col text-white text-center">
        <div class="text-h4 text-weight-light">
          {{ weatherData.name }}
        </div>
        <div class="text-h6 text-weight-light">
          {{ weatherData.weather[0].main }}
        </div>
        <div class="text-h1 text-weight-thin q-my-lg relative-position">
          <span> {{ Math.round(weatherData.main.temp)}}</span>
          <span class="text-h4 relative-position">
            &deg;C
          </span>
        </div>
      </div>
      <div class="col text-center">
        <img
          :src="`http://openweathermap.org/img/wn/${ weatherData.weather[0].icon }@2x.png`"/>
      </div>
    </template>

    <template v-else>

    </template>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return{
      search: '',
      weatherData: '',
      lat: null,
      lon: null,
      apiURL: 'http://api.openweathermap.org/data/2.5/weather',
      apiKey: '035ac371f9951c27c9439d372caebd61'
    }
  },
  methods:{
    getLocation() {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log('position: ', position)
          this.lat = position.coords.latitude
          this.lon = position.coords.longitude
          this.getWeatherByCoords()
        }
      )
    },
    getWeatherByCoords() {
      this.$axios(
        `${ this.apiURL }?lat=${ this.lat }&lon=${ this.lon }&appid=${ this.apiKey }&units=metric`
      ).then(response => {
        this.weatherData = response.data
      })
    },
    getWeatherBySearch() {
      this.$axios(
        `${ this.apiURL }?q=${ this.search }&appid=${ this.apiKey }&units=metric`
      ).then(response => {
        this.weatherData = response.data
      })
    },
  }
}
</script>

<style lang="sass">
  .q-page
    background: linear-gradient(to bottom, #136a8a,#267871)
</style>
