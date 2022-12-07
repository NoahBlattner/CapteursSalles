<template>
    <q-card class="q-pa-md">
      <q-card-section className="text-h6">
        Line Chart
      </q-card-section>
      <q-card-section>
        <div ref="linechart" id="lineChart" style="height: 300px;"></div>
      </q-card-section>
      <q-resize-observer @resize="onResize"/>
    </q-card>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'LineChart',
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      model: false,
      line_chart: null
    }
  },
  methods: {
    // Initialize the line chart
    init () {
      const lineChart = document.getElementById('lineChart')
      echarts.dispose(lineChart)
      const theme = this.model ? 'dark' : 'light'
      this.line_chart = echarts.init(lineChart, theme)
      this.line_chart.setOption(this.options)
    },
    onResize () {
      if (this.line_chart) {
        this.line_chart.resize()
      }
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    '$q.dark.isActive': function () {
      this.init()
    }
  }
}
</script>

<style scoped>

</style>
