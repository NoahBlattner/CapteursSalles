<template>
  <div
    class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
    :style="row.selected ? 'transform: scale(0.95);' : ''"
  >
    <q-card :class="row.selected ? 'bg-grey-2' : ''">
      <q-card-section class="q-pb-sm">
        <div class="text-h5">{{ row.salle.nom }}</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pb-sm">
        <div class="text-h6 text-subtitle1">Latest readings :</div>
      </q-card-section>
      <q-list class="q-ml-md" dense>
        <q-item v-for="col in gridElementData.cols.filter(col => col.name !== 'room')" :key="col.name">
          <q-item-section>
            <q-item-label>{{ col.label }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label caption>{{ col.value }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'SensorView',
  props: {
    gridElementData: {
      required: true,
      type: Object
    }
  },
  computed: {
    row () {
      return this.gridElementData.row
    }
  }
}
</script>

<style scoped>

</style>
