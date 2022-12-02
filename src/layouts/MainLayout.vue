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
          class="gt-xs"
        />

        <q-toolbar-title class="absolute-center">
          Classroom sensors
        </q-toolbar-title>

        <q-btn @click="btnClick" flat icon-right="account_circle" :label="(user) ? user.nom : 'Sign in'" class="absolute-right">
          <q-popup-proxy v-if="user" transition-show="scale" transition-hide="scale" class="no-border-radius">
            <q-list>
              <q-btn class="full-width bg-red-6 no-border-radius" @click="logout">
                Logout
              </q-btn>
            </q-list>
          </q-popup-proxy>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="gt-xs"
      bordered
    >
      <q-list>
        <q-item-label header class="text-black">
          Menu de navigation
        </q-item-label>
        <PageLink v-for="link in linkList" :link-item="link" :key="link.id"/>
        <PageLink v-if="!user" :link-item="this.signInLink"/>
      </q-list>
    </q-drawer>

    <q-footer elevated class="lt-sm">
      <q-tabs>
        <q-route-tab v-for="link in linkList" :key="link.id"
                     :to="link.path"
                     :icon="link.icon"
                     :label="link.text"
                     exact
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <div class="full-width">
        <q-img src="divtec.png" width="200px" class="image-center vertical-middle q-mt-lg q-ml-lg" />
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import PageLink from 'components/PageLink.vue'
import { mapActions, mapGetters } from 'vuex'
import { LocalStorage } from 'quasar'

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
      leftDrawerOpen: true
    }
  },
  methods: {
    ...mapActions('users', ['AC_DisconnectUser', 'AC_SetUser']),
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    btnClick () {
      if (!this.user) {
        this.$router.push('/login')
      }
    },
    logout () {
      this.$router.push('/login')
      this.AC_DisconnectUser()
    }
  },
  computed: {
    ...mapGetters('users', ['user'])
  },
  mounted () {
    this.AC_SetUser({ user: LocalStorage.getItem('user'), token: LocalStorage.getItem('token') })
    if (!this.user) {
      this.$router.push('/login')
    }
  }
})
</script>
<style scoped>
  .image-center {
    display: block;
    margin: 2em auto auto auto;
  }
</style>
