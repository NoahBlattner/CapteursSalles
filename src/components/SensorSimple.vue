<template>
  <q-card-section class="q-pt-sm">
    <!-- time and date -->
    <div class="text-subtitle2 absolute-center q-mt-sm underline fullscreen">
      {{ this.dateTime.date + ' | ' + this.dateTime.time }}
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
      @click="$emit('viewDetails')"
    />
  </q-card-section>
</template>

<script>
export default {
  name: 'SensorSimple',
  props: {
    gridElementData: {
      required: true,
      type: Object
    },
    dateTime: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
