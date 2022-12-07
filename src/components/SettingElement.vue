<template>
  <q-item>
    <q-item-section>
      <q-icon :name="settingsOptions.icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ settingsOptions.label }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-toggle v-if="settingsType === toggle" :model-value="currentSettingValue" @update:model-value="changeSettingValue" />
      <q-select v-else @update:model-value="changeSettingValue" :model-value="currentSettingValue" :options="settingsOptions.options" />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'SettingElement',
  props: {
    settingOptions: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      currentSettingValue: this.settingOptions.defaulValue
    }
  },
  computed: {
    settingsType: this.settingOptions.states.length > 2 ? 'list' : 'toggle'
  },
  methods: {
    changeSettingValue () {
      this.settingOptions.action(this.currentSettingValue)
    }
  }
}
</script>

<style scoped>

</style>
