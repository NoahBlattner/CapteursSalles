<template>
  <q-page padding>
    <h3 class="full-width text-center">Sensor overview</h3>
    <q-table
      grid
      :columns="columns"
      :rows="sensorList"
      :rows-per-page-options="[5, 10, 15]"
      binary-state-sort
      class="q-pa-sm"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="Search" />
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

export default {
  name: 'OverviewPage',
  components: { SensorView },
  data () {
    return {
      columns: [
        {
          name: 'room',
          required: true,
          label: 'Room',
          align: 'center',
          field: row => row.name,
          sortable: true
        },
        {
          name: 'humidity',
          required: true,
          label: 'Humidity',
          align: 'center',
          field: row => row.humidity,
          sortable: true
        },
        {
          name: 'temperature',
          required: true,
          label: 'Temperature',
          align: 'center',
          field: row => row.temperature,
          sortable: true
        }
      ],
      sensorList: [
        {
          id: 1,
          name: 'Sensor 1',
          humidity: 50,
          temperature: 20,
          description: 'This is the first sensor'
        },
        {
          id: 2,
          name: 'Sensor 2',
          humidity: 60,
          temperature: 25,
          description: 'This is the second sensor'
        },
        {
          id: 3,
          name: 'Sensor 3',
          humidity: 70,
          temperature: 30,
          description: 'This is the third sensor'
        },
        {
          id: 4,
          name: 'Sensor 4',
          humidity: 80,
          temperature: 35,
          description: 'This is the fourth sensor'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
