<template>
  <div
    class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
    :style="row.selected ? 'transform: scale(0.95);' : ''"
  >
    <q-card :class="details ? 'fill-screen' : ''">
      <q-card-section class="q-pb-sm">
        <div class="text-h5 text-center">{{ row.salle.nom }}</div>
      </q-card-section>
      <q-separator />
      <SensorSimple
        v-if="!details"
        :grid-element-data="gridElementData"
        :date-time="{date, time}"
        @viewDetails="viewDetails(true)"/>
      <SensorDetails
        v-else
        :grid-element-data="gridElementData"
        @closeDetails="viewDetails(false)"/>
      <q-btn
        class="q-ma-none full-width top-no-border-radius"
        color="white"
        text-color="primary"
        :label="details ? 'Close' : 'View graph'"
        @click="toggleDetails"
      />
    </q-card>
  </div>
  <div id="grayout" v-if="details"></div>
</template>

<script>
import { date } from 'quasar'
import SensorSimple from 'components/Sensors/SensorSimple.vue'
import SensorDetails from 'components/Sensors/SensorDetails.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'SensorView',
  components: { SensorDetails, SensorSimple },
  data () {
    return {
      details: false
    }
  },
  props: {
    gridElementData: {
      required: true,
      type: Object
    }
  },
  methods: {
    // Toggle the details view
    toggleDetails () {
      this.details = !this.details
    }
  },
  computed: {
    ...mapGetters('settings', ['timeFormat', 'dateFormat']),
    // Get the current row
    row () {
      return this.gridElementData.row
    },
    // Get the date of the last update
    date () {
      const dateToFormat = new Date(this.row.mesures[0].date)
      return date.formatDate(dateToFormat, this.dateFormat)
    },
    // Get the time of the last update
    time () {
      const dateToFormat = new Date(this.row.mesures[0].date)
      return date.formatDate(dateToFormat, this.timeFormat)
    }
  }
}
</script>

<style scoped lang="scss">
.underline {
  text-decoration: underline;
}
.top-no-border-radius {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.fill-screen {
  top: 10vh;
  left: 10vw;
  right: 0;
  bottom: 0;
  max-height: 100vh;
  max-width: 100vw;
  width: 80vw;
  height: 70vh;
  border-radius: 10px;
  z-index: 10001;
  position: fixed;
  animation: zoomIn .5s forwards;
}
@keyframes zoomIn {
  from {
    transform: scale(.3);
  }
  to {
    transform: scale(1);
  }
}
/*
@keyframes zoomIn {
  99% {
    position: center;
  }
  to {
    top: 15vh;
    left: 15vw;
    width: 70vw;
    height: 70vh;
    max-height: 80vh;
    max-width: 80vw;
    position: fixed;
  }
}
 */
#grayout {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 10000;
  animation: fadeIn .5s;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}
</style>
