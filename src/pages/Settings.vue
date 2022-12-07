<template>
  <q-page className="flex flex-center">
    <q-list padding>
      <SettingElement v-for="setting in settingsList" :setting-options="setting" :key="setting.label" />
    </q-list>
  </q-page>
</template>

<script>

import { mapActions } from 'vuex'
import SettingElement from 'components/SettingElement.vue'

export default ({
  name: 'PageFavoris',
  components: {
    SettingElement
  },
  data () {
    return {
      settingsList: [
        {
          label: 'Time format',
          icon: 'time',
          defaultValue: 'HH:mm',
          states: [
            {
              label: '24h format',
              value: 'HH:mm'
            },
            {
              label: '12h format',
              value: 'hh:mm'
            }
          ],
          action: (value) => {
            this.AC_SetTimeFormat(value)
          }
        },
        {
          label: 'Date format',
          icon: 'date',
          defaultValue: 'D MMM YYYY',
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
  methods: {
    ...mapActions('settings', ['AC_SetDateFormat', 'AC_SetTimeFormat'])
  }
})
</script>
