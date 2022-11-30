<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header class="text-black">
          Menu de navigation
        </q-item-label>
        <PageLink clickable v-for="link in linkList" :link-item="link" :key="link.id" :to="link.path"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import PageLink from 'components/PageLink.vue'

const linkList = [
  {
    title: 'Overview',
    caption: 'All sensors',
    icon: 'apps',
    link: '/'
  },
  {
    title: 'Favorites',
    caption: 'Your favorite',
    icon: 'favorite',
    link: '/favorites'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    PageLink
  },
  data () {
    return {
      linkList
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
