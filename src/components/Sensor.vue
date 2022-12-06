<template>
  <div
    class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
    :style="row.selected ? 'transform: scale(0.95);' : ''"
  >
    <q-card :class="focus ? 'fill-screen' : 'unmodified'">
      <q-card-section class="q-pb-sm">
        <div class="text-h5 text-center">{{ row.salle.nom }}</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-sm">
        <!-- time and date -->
        <div class="text-subtitle2 absolute-center q-mt-sm underline fullscreen">
          {{ this.date + ' | ' + this.time }}
        </div>
      </q-card-section>
      <q-card-section class="q-pb-sm">
        <q-list dense>
          <q-item v-for="col in gridElementData.cols.filter(col => col.name !=='room')" :key="col.name">
            <q-item-section>
              <q-item-label>{{ col.label }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label caption>{{ col.value }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-section class="q-pa-none">
        <q-btn
          class="q-ma-none full-width top-no-border-radius"
          color="white"
          text-color="primary"
          label="View all readings"
          @click="viewAll()"
        />
      </q-card-section>
    </q-card>
  </div>
  <div id="grayout" v-if="focus"></div>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'SensorView',
  data () {
    return {
      focus: false
    }
  },
  props: {
    gridElementData: {
      required: true,
      type: Object
    }
  },
  methods: {
    viewAll () {
      this.focus = true
    }
  },
  computed: {
    row () {
      return this.gridElementData.row
    },
    date () {
      const dateToFormat = new Date(this.row.mesures[0].date)
      return date.formatDate(dateToFormat, 'D MMM YYYY')
    },
    time () {
      const dateToFormat = new Date(this.row.mesures[0].date)
      return date.formatDate(dateToFormat, 'HH:mm')
    }
  },
  mounted () {
    console.log(this.gridElementData)
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100vw;
  max-height: 100vh;
  position: fixed;
  border-radius: 10px;
  z-index: 10001;
  margin: 50px 80px;
  animation: zoomIn .5s;
}
@keyframes zoomIn {
  from {
    transform: scale3d(.3, .3, .3);
  }
}
#grayout {
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 10000;
}
</style>
