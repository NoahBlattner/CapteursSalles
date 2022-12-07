<template>
  <q-page padding>
    <q-list bordered padding class="q-ma-lg">
      <SettingElement v-for="setting in settingsList" :setting="setting" :key="setting.label" />
    </q-list>
  </q-page>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import SettingElement from 'components/SettingElement.vue'

export default ({
  name: 'SettingsPage',
  components: {
    SettingElement
  },
  data () {
    return {
      settingsList: [
        {
          label: 'Use 12h format',
          icon: 'time',
          value: this.getIs12hFormat(),
          action: (value) => {
            this.AC_SetTimeFormat(value)
          }
        },
        {
          label: 'Date format',
          icon: 'date',
          value: this.getDateFormat(),
          states: [
            {
              label: '1 Dec 2020',
              value: 'D MMM YYYY'
            },
            {
              label: '01 12 2020',
              value: 'DD/MM/YYYY'
            },
            {
              label: '12 01 2020',
              value: 'MM/DD/YYYY'
            },
            {
              label: '2020 12 01',
              value: 'YYYY/MM/DD'
            }
          ],
          action: (value) => {
            this.AC_SetDateFormat(value)
          }
        }
      ]
    }
  },
  computed: {
    ...mapGetters('settings', ['dateFormat', 'is12hFormat'])
  },
  methods: {
    ...mapActions('settings', ['AC_SetDateFormat', 'AC_SetTimeFormat']),
    getDateFormat () {
      return this.dateFormat
    },
    getIs12hFormat () {
      return this.is12hFormat
    }
  }
})
</script>

<style scoped lang="scss">
.thing {
  width: fit-content;
}
</style>
