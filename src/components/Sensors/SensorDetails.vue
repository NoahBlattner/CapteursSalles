<template>
  <LineChart :options="options" />
</template>

<script>
import { toRaw } from 'vue'
import { date } from 'quasar'
import LineChart from 'components/LineChart.vue'

export default {
  name: 'SensorDetails',
  components: { LineChart },
  props: {
    gridElementData: {
      required: true,
      type: Object
    }
  },
  methods: {
    // Get all temperatures from the mesures array in reverse order
    getTemperatureList () {
      const temperatureList = []
      const row = toRaw(this.gridElementData.row)
      row.mesures.forEach(mesure => {
        temperatureList.unshift(mesure.temperature)
      })
      return temperatureList
    },
    // Get all humidity percentages from the mesures array in reverse order
    getHumidityList () {
      const humidityList = []
      const row = toRaw(this.gridElementData.row)
      row.mesures.forEach(mesure => {
        humidityList.unshift(mesure.humidite)
      })
      return humidityList
    },
    // Get all timestamps from the mesures array in reverse order
    getTimeList () {
      const timeList = []
      const row = toRaw(this.gridElementData.row)
      row.mesures.forEach(mesure => {
        const dateToFormat = new Date(mesure.date)
        timeList.unshift(date.formatDate(dateToFormat, 'HH:mm'))
      })
      return timeList
    },
    toRaw (value) {
      return toRaw(value)
    }
  },
  data () {
    return {
      // Line chart options
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
            data: this.getTimeList()
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
            smooth: true,
            showSymbol: true,
            emphasis: {
              focus: 'series'
            },
            data: this.getTemperatureList()
          },
          {
            name: 'Humidity',
            type: 'line',
            smooth: true,
            showSymbol: true,
            emphasis: {
              focus: 'series'
            },
            data: this.getHumidityList()
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
</style>
