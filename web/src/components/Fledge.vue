<template>
  <header class="bg-black text-gray-100 py-4 <sm:px-2 sm:px-4">
    <div class="flex justify-between">
      <h1 class="<sm:text-2xl sm:text-4xl"><span class="">F</span>ledge</h1>
      <h3 v-if="loading" class="sm:text-2xl <sm:text-lg loading">Loading...</h3>
      <button @click="searchmode = !searchmode">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="sm:h-10 <sm:h-6 <sm:w-6 sm:w-10" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
          <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5z" fill="currentColor"></path>
        </svg>
      </button>
    </div>

    <div>
      <h2 class="my-auto py-2 <sm:text-md sm:text-xl">{{ airport.name }}</h2>
      <div v-if="airport.weather" class="sm:flex <sm:children:mb-1 children:mr-2">
        <p class="bg-dark-900 rounded-md px-2">{{ airport.weather.temp.celsius }}&#8451;</p>
        <p class="flex all:mr-1 bg-dark-900 rounded-md px-2">
          <span v-if="airport.weather.sky.condition.text === 'Clear'"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-6 w-6" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M3.55 18.54l1.41 1.41l1.8-1.79l-1.42-1.42M11 22.45h2V19.5h-2m1-14a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.66l1.8 1.79l1.41-1.41l-1.79-1.8m1.79-12.28l-1.41-1.41l-1.8 1.79l1.42 1.42M13 .55h-2V3.5h2m-9 7H1v2h3m2.76-7.66l-1.8-1.79l-1.41 1.41l1.79 1.8l1.42-1.42z" fill="currentColor"></path></svg></span>
          <span v-else-if="airport.weather.sky.condition.text === 'Overcast'" ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-6 w-6" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M3 15h10a1 1 0 0 1 1 1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1m13 0h5a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1a1 1 0 0 1 1-1M1 12a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 9c2.19 0 3.97 1.76 4 4h-2a2 2 0 0 0-2-2h-2v-1a5 5 0 0 0-5-5C9.5 5 7.45 6.82 7.06 9.19C6.73 9.07 6.37 9 6 9a3 3 0 0 0-3 3a3 3 0 0 0 .17 1H1.1L1 12m2 7h2a1 1 0 0 1 1 1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1m5 0h13a1 1 0 0 1 1 1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1a1 1 0 0 1 1-1z" fill="currentColor"></path></svg> </span>
          <span v-else-if="airport.weather.sky.condition.text === 'Rainy'" > <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-6 w-6" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9 12c.53.14.85.69.71 1.22l-1.3 4.83c-.14.54-.69.85-1.22.71a.967.967 0 0 1-.69-1.22l1.28-4.83c.14-.54.69-.85 1.22-.71m4 0c.53.14.85.69.71 1.22l-2.07 7.73c-.14.55-.69.85-1.23.71c-.53-.16-.85-.69-.71-1.23l2.08-7.72c.14-.54.69-.85 1.22-.71m4 0c.53.14.85.69.71 1.22l-1.3 4.83c-.14.54-.69.85-1.22.71a.967.967 0 0 1-.69-1.22l1.28-4.83c.14-.54.69-.85 1.22-.71m0-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3c0 1.11.6 2.08 1.5 2.6v-.01c.5.28.64.91.37 1.37c-.28.47-.87.64-1.37.36v.01A4.98 4.98 0 0 1 1 11a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4c0 1.5-.8 2.77-2 3.46c-.5.27-1.09.11-1.37-.37c-.27-.48-.13-1.09.37-1.37v.01c.6-.34 1-.99 1-1.73a2 2 0 0 0-2-2h-2z" fill="currentColor"></path></svg> </span>
          <span v-else><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-6 w-6" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M22 15.04c0 2.19-1.76 3.96-3.93 3.96H5.93C3.76 19 2 17.23 2 15.04c0-1.97 1.43-3.6 3.31-3.9c-.03-.14-.04-.28-.04-.43c0-1.38 1.11-2.51 2.49-2.51c.61 0 1.18.23 1.61.6c.77-1.75 1.76-3.36 4.54-3.36c3.37 0 4.96 2.62 4.96 5.39c0 .11 0 .23-.01.34A3.95 3.95 0 0 1 22 15.04z" fill="currentColor"></path></svg></span>
          {{ airport.weather.sky.condition.text }}
        </p>
        <p class="flex all:mr-1 bg-dark-900 rounded-md px-2">
          <span
            ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-6 w-6" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path
                d="M4 10a1 1 0 0 1-1-1a1 1 0 0 1 1-1h8a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.55 0-1.05.22-1.41.59a.973.973 0 0 1-1.42 0c-.39-.39-.39-1.03 0-1.42C9.9 2.45 10.9 2 12 2a4 4 0 0 1 4 4a4 4 0 0 1-4 4H4m15 2a1 1 0 0 0 1-1a1 1 0 0 0-1-1c-.28 0-.53.11-.71.29a.996.996 0 0 1-1.41 0c-.38-.39-.38-1.02 0-1.41C17.42 8.34 18.17 8 19 8a3 3 0 0 1 3 3a3 3 0 0 1-3 3H5a1 1 0 0 1-1-1a1 1 0 0 1 1-1h14m-1 6H4a1 1 0 0 1-1-1a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-.83 0-1.58-.34-2.12-.88c-.38-.39-.38-1.02 0-1.41a.996.996 0 0 1 1.41 0c.18.18.43.29.71.29a1 1 0 0 0 1-1a1 1 0 0 0-1-1z"
                fill="currentColor"
              ></path></svg
          ></span>
          <span>{{ airport.weather.wind.speed.kmh }} km/h </span>
          <!-- :style='`transform: rotate(${airport.weather.wind.direction.degree}deg);`' -->
          <span
            ><svg :style="`transform: rotate(${airport.weather.wind.direction.degree}deg);`" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-6 w-6" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path d="M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4z" fill="currentColor"></path></svg
          ></span>
          <span> {{ airport.weather.wind.direction.text }} </span>
        </p>
      </div>
    </div>

    <transition name="slide" @after-enter="this.$refs.Search.focus()">
      <div v-show="searchmode" tabindex="0" @keydown.esc="searchmode = false" class="search w-full h-full absolute bg-dark-900 top-0 left-0 max-w-screen <sm:pt-10 pt-4 z-10 sm:px-4">
        <div>
          <div class="absolute sm:px-4 <sm:px-2 top-0 right-0 pt-4">
            <button class="right-0" @click="searchmode = !searchmode">
              <svg xmlns="http://www.w3.org/2000/svg" class="<sm:h-6 <sm:w-6 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div class="text-center <sm:pt-4">
            <input class="text-gray-100 <sm:w-4/5 sm:w-130 lg:w-150 pb-2 bg-dark-900 text-center <md:text-lg md:text-4xl focus:outline-none" placeholder="Search airport" type="search" v-model="airport.search" ref="Search" @change="searchAirport" />
            <hr class='<sm:w-4/5 sm:w-130 lg:w-150 mx-auto text-center ' >
            <div v-if='airport.search.length > 2  && !loading ' class="<sm:w-4/5 sm:w-130 lg:w-150 text-dark-900 bg-gray-100 py-2 rounded-b-lg mx-auto">
              <div v-if="airport.query.length > 0 " class="md:text-lg cursor-pointer px-2 hover:bg-gray-200 hover:text-blue-500" @click="selectAirport(airport.id)" v-for="airport in airport.query" :key="airport">
                <div class="md:px-4 py-1 flex sm:justify-between">
                  <p>{{ airport.label.split('(')[0] }}</p>
                  <p class="<sm:hidden">{{ airport.id }}</p>
                </div>
                <hr class="text-gray-300" />
              </div>
              <div v-if='airport.search.length > 2 && !airport.query.length > 0 && !loading ' class='md:text-lg' >
                <p>Not found</p>
              </div>
            </div>
            <p v-if='loading && airport.search.length > 1' class='loading text-lg' >Searching...</p>
            <div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>

  <transition name="slide">
    <main v-show="!searchmode" class="lg:flex bg-black min-h-screen">
      <section class="bg-dark-800 text-gray-300 lg:w-200">
        <div class="flex px-4 <sm:text-2xl sm:text-4xl text-orange-500">
          <h2 class="font-semibold">Arrivals</h2>
          <div class="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" sm:h-12 sm:w-12" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path d="M2.5 19h19v2h-19v-2m7.18-5.73l4.35 1.16l5.31 1.42c.8.21 1.62-.26 1.84-1.06c.21-.79-.26-1.62-1.06-1.84l-5.31-1.42l-2.76-9.03l-1.93-.5v8.28L5.15 8.95l-.93-2.32l-1.45-.39v5.17l1.6.43l5.31 1.43z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
        <hr class="opacity-50" />
        <Arrivals :arrival="arrival" v-for="arrival in flights.arrivals" :key="arrival" class="hover:bg-dark-400 rounded-md sm:px-4 <md:text-sm" />
      </section>

      <section class="bg-dark-800 text-gray-300 lg:w-200">
        <div class="flex px-4 <sm:text-2xl sm:text-4xl text-orange-500">
          <h2 class="font-semibold">Departures</h2>
          <div class="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" sm:h-12 sm:w-12" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path d="M2.5 19h19v2h-19v-2m19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10L8 3.57l-1.91.51l4.14 7.17l-4.97 1.33l-1.97-1.54l-1.45.39l1.82 3.16l.77 1.33l1.6-.42l5.31-1.43l4.35-1.16L21 11.5c.81-.24 1.28-1.06 1.07-1.86z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
        <hr class="opacity-50" />
        <Departures :departure="departure" v-for="departure in flights.departures" :key="departure" class="hover:bg-dark-400 rounded-md sm:px-4 <md:text-sm" />
      </section>
    </main>
  </transition>
</template>

<script>
import { HTTP } from '../api.js'
import Arrivals from './Arrivals.vue'
import Departures from './Departures.vue'

export default {
  data() {
    return {
      flights: {
        departures: {},
        arrivals: {},
      },
      airport: {
        name: '',
        code: 'fru',
        weather: null,
        query: [],
        search: '',
      },
      searchmode: false,
      loading: true,
    }
  },
  components: {
    Arrivals,
    Departures,
  },
  mounted() {
    this.loadFlights()
  },
  methods: {
    async loadFlights() {
      const res = await HTTP.get(`airport.json?code=${this.airport.code}`)
      let data = res.data.result.response.airport.pluginData
      this.loading = false
      this.flights.departures = data.schedule.departures.data
      this.flights.arrivals = data.schedule.arrivals.data
      this.airport.weather = data.weather
      this.airport.name = data.details.name

      // console.log(res)
    },
    async searchAirport() {
      if (this.airport.search.length > 1) {
        this.loading = true
        const res = await HTTP.get(`find?query=${this.airport.search}&type=airport`)
        this.airport.query = res.data.results
        this.loading = false
        // console.log(res.data.results)
      } else if (this.airport.search.length <= 1) {
        this.airport.query = []
      }
    },
    selectAirport(id) {
      this.airport.code = id
      this.loadFlights()
      this.searchmode = false
      this.airport.search = ''
      this.airport.query = []
      this.loading = true
    },
  },
  // watch: {
  //   search() {
  //     this.searchAirport()
  //   }
  // }
}
</script>

<style>
.canceled {
  background-color: #dc2626 !important ;
}

.landed {
  background-color: #16a34a !important;
}

.delayed {
  background-color: #fbbf24 !important;
  color: #181818 !important;
}

.estimated {
  background-color: #1e40af !important;
}

.loading {
  background: linear-gradient(-45deg, #1e40af, #16a34a, #fbbf24, #dc2626);
  animation: gradient 3s ease infinite;
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.2s;
  transform: translateY(100%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>