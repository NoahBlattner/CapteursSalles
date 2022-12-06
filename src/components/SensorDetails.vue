<template>
  <div class="q-ma-lg">
      <q-card>
        <q-card-section className="text-h6">
          Line Chart
        </q-card-section>
        <q-card-section>
          <div ref="linechart" id="lineChart" style="height: 300px;"></div>
        </q-card-section>
        <q-resize-observer @resize="onResize"/>
      </q-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { toRaw } from 'vue'

export default {
  name: 'SensorDetails',
  props: {
    gridElementData: {
      required: true,
      type: Object
    }
  },
  methods: {
    getTemperatureList () {
      const temperatureList = []
      const row = toRaw(this.gridElementData.row)
      row.mesures.forEach(mesure => {
        temperatureList.push(mesure.temperature)
      })
      return temperatureList
    },
    getHumidityList () {
      const humidityList = []
      const row = toRaw(this.gridElementData.row)
      row.mesures.forEach(mesure => {
        humidityList.push(mesure.humidite)
      })
      return humidityList
    },
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
    },
    toRaw (value) {
      return toRaw(value)
    }
  },
  data () {
    return {
      model: false,
      options: {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['Temperature', 'Humidity'],
          bottom: 10
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '20%',
          top: '5%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.gridElementData.row.mesures.map(mesure => mesure.date)
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Temperature',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(128, 255, 165)'
              }, {
                offset: 1,
                color: 'rgba(1, 191, 236)'
              }])
            },
            emphasis: {
              focus: 'series'
            },
            data: this.getTemperatureList()
          },
          {
            name: 'Humidity',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 221, 255)'
              }, {
                offset: 1,
                color: 'rgba(77, 119, 255)'
              }])
            },
            emphasis: {
              focus: 'series'
            },
            data: this.getHumidityList()
          }
        ]
      },
      line_chart: null
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
