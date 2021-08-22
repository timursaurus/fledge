<template>
  <div>
    <div class="grid sm:grid-cols-12 <sm:grid-cols-8 ">
      <div class='text-center' >
        <p class='text-orange-500'  >{{ convertDate(arrival.flight.time.scheduled.arrival) }}</p>
        <svg v-if='shown' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-6 w-6 text-gray-500 m-auto transform -rotate-90  " width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M23 12l-4 4v-3H6.83A2.99 2.99 0 0 1 4 15a3 3 0 0 1-3-3a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H19V8l4 4z" fill="currentColor"></path></svg>
      </div>
      <div class="sm:text-lg sm:col-span-8 md:col-span-7 <sm:col-span-4 ">
        <p class=" text-gray-100 font-semibold">{{ arrival.flight.airport.origin.position.region.city }}</p>
        <p v-if='arrival.flight.airline' >{{ arrival.flight.airline.name }} &mdash; {{ arrival.flight.identification.number.default }}</p>
        <p v-else >Unknown</p>
      </div>
      <div class="m-auto <md:hidden ">
        <p>{{ arrival.flight.airport.origin.position.country.code }}</p>
      </div>
      <div class="col-span-2  text-center flex my-auto">
        <p class="my-auto w-full bg-dark-900  mx-auto px-2 rounded-md " :class="{ estimated: isEstimated(arrival.flight.status.text), canceled: isCanceled(arrival.flight.status.text), delayed: isDelayed(arrival.flight.status.text), landed: isLanded(arrival.flight.status.text) }" >{{ arrival.flight.status.text }}</p>        
      </div>
      <div class="mx-auto my-auto">
        <button @click="shown = !shown">
          <svg v-if='shown' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-6 w-6" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41z" fill="currentColor"></path></svg>        
          <svg v-if='!shown' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-6 w-6" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z" fill="currentColor"></path></svg>
        </button>
      </div>
    </div>
    <div v-if='shown' class="grid sm:grid-cols-12 <sm:grid-cols-8 ">
      <div class='text-center text-gray-500' >
        <p>{{ convertDate(arrival.flight.time.scheduled.departure) }}</p>
      </div>
      <div class="flex align-bottom sm:col-span-8 <sm:col-span-4 -ml-2">
        <div class="flex bg-dark-900 rounded-md px-2">
          <p class="flex overflow-hidden overflow-ellipsis ...">{{ arrival.flight.airport.origin.name }} ({{ arrival.flight.airport.origin.code.iata }}), {{ arrival.flight.airport.origin.position.country.name }}</p>
          <span class="my-auto"
            ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-6 h-6" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M5 6.41L6.41 5L17 15.59V9h2v10H9v-2h6.59L5 6.41z" fill="currentColor"></path></svg
          ></span>
        </div>
      </div>
      <div class="flex bg-dark-900 col-span-2 rounded-md">
        <div class="mx-auto flex my-auto">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-6 h-6 mx-1" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2A1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1l3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor"></path></svg>
          <p>{{ arrival.flight.aircraft.model.code }}</p>
        </div>
      </div>
    </div>
    <hr class='opacity-10 ' >
  </div>
</template>

<script>
export default {
  props: {
    arrival: Object,
  },
  data() {
    return {
      shown: false,
    }
  },
  methods: {
    convertDate(x) {
      x *= 1000
      let time = new Date(x)
      return time.toTimeString().slice(0, 5)
    },
    isCanceled(text) {
      if (text.includes('Canceled')) {
        return true
      }
    },
    isEstimated(text) {
      if (text.includes('Estimated')) {
        return true
      }
    },
    isDelayed(text) {
      if (text.includes('Delayed')) {
        return true
      }
    },
    isLanded(text) {
      if (text.includes('Landed')) {
        return true
      }
    }
  },
}
</script>
