<template>
  <q-item clickable exact class="text-grey-4" @click="$router.push(linkItem.link)">
    <q-item-section avatar>
      <q-icon color="primary" :name="linkItem.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-black">{{ linkItem.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>

export default ({
  name: 'PageLink',
  props: {
    linkItem: {
      required: true,
      type: Object
    }
  }
})
</script>

<style scoped>
</style>
