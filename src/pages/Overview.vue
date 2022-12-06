<template>
  <q-page padding>
    <h3 class="full-width text-center">Sensor overview</h3>
    <q-table
      grid
      :columns="columns"
      :rows="sensorList"
      :rows-per-page-options="[4, 8, 12]"
      class="q-pa-sm"
      :filter="filter"
      sort-method=""
    >
      <template v-slot:top-right>
        <q-input dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="gridElement">
        <SensorView :grid-element-data="gridElement" />
      </template>
    </q-table>
    <q-list bordered class="rounded-borders">
    </q-list>
  </q-page>
</template>

<script>

import SensorView from 'components/Sensor.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'OverviewPage',
  components: { SensorView },
  data () {
    return {
      filter: '',
      columns: [
        {
          name: 'room',
          required: true,
          label: 'Room',
          align: 'center',
          field: row => row.salle.nom,
          sortable: true,
          searchable: true
        },
        {
          name: 'humidity',
          required: true,
          label: 'Humidity',
          align: 'center',
          field: row => row.mesures[0].humidite + '%',
          sortable: true,
          searchable: true
        },
        {
          name: 'temperature',
          required: true,
          label: 'Temperature',
          align: 'center',
          field: row => row.mesures[0].temperature + '°C',
          sortable: true,
          searchable: true
        }
      ]
    }
  },
  methods: {
    ...mapActions('sensors', ['AC_GetSensorsAPI'])
  },
  computed: {
    ...mapGetters('sensors', ['sensorList'])
  },
  mounted () {
    this.AC_GetSensorsAPI()
  }
}
</script>

<style scoped>

</style>
