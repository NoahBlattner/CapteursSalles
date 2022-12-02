<template>
  <q-page padding>
    <h3>Sensor overview</h3>
    <q-list bordered class="rounded-borders">
      <SensorView v-for="sensor in sensorList" :key="sensor.id" :sensor="sensor" clickable/>
    </q-list>
  </q-page>
</template>

<script>
import SensorView from 'components/Sensor.vue'

export default {
  name: 'OverviewPage',
  components: { SensorView },
  computed: {
    sensorList () {
      return [
        {
          id: 1,
          name: 'Sensor 1',
          description: 'This is the first sensor'
        },
        {
          id: 2,
          name: 'Sensor 2',
          description: 'This is the second sensor'
        },
        {
          id: 3,
          name: 'Sensor 3',
          description: 'This is the third sensor'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
