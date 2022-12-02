<template>
  <q-item>
    <q-item-section avatar>
      <q-icon name="cloud" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ sensor.name }}</q-item-label>
      <q-item-label caption>{{ sensor.description }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'SensorView',
  props: {
    sensor: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
