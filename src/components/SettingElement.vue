<template>
  <q-item class="full-width">
    <q-item-section side>
      <q-icon :name="setting.icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ setting.label }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-toggle v-if="settingsType === 'toggle'" v-model="currentSettingValue" @update:model-value="changeSettingValue" />
      <q-select v-else @update:model-value="changeSettingValue" v-model="currentSettingValue" :options="optionLabels" />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'SettingElement',
  props: {
    setting: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      currentSettingValue: this.setting.value
    }
  },
  computed: {
    // Get the type of the setting from the prop
    settingsType () {
      return this.setting?.states ? 'list' : 'toggle'
    },
    // Get the labels of the options from the prop
    optionLabels () {
      return this.setting.states.map(state => state.label)
    }
  },
  methods: {
    getStateValueFromLabel (label) {
      return this.setting.states.find(state => state.label === this.currentSettingValue).value
    },
    changeSettingValue () {
      const value = this.settingsType === 'toggle' ? this.currentSettingValue : this.getStateValueFromLabel(this.currentSettingValue)
      this.setting.action(value)
    }
  },
  mounted () {
    console.log(this.setting)
  }
}
</script>

<style scoped>

</style>
