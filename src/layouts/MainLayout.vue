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

        <q-toolbar-title class="absolute-center">
          Classroom sensors
        </q-toolbar-title>

        <q-btn @click="btnClick" flat icon-right="account_circle" :label=" (user) ? user : 'Sign in'" class="absolute-right">
          <q-popup-proxy v-if="user" transition-show="scale" transition-hide="scale">
            <q-list>
              <q-item clickable @click="console.log('Not implemented yet') /* TODO Sign out user */" v-close-popup>
                <q-item-section>Sign out</q-item-section>
              </q-item>
            </q-list>
          </q-popup-proxy>
        </q-btn>
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
        <PageLink v-for="link in linkList" :link-item="link" :key="link.id"/>
        <PageLink v-if="true /* TODO check if user */" :link-item="this.signInLink"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
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

export default ({
  name: 'MainLayout',

  components: {
    PageLink
  },
  data () {
    return {
      linkList,
      signInLink: {
        title: 'Sign in',
        caption: 'Sign in',
        icon: 'account_circle',
        link: '/login'
      },
      leftDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
})
</script>
