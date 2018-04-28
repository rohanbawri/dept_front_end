<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav" absolute>
      <v-list>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon v-if="token" v-on:click="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Home page</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn @click="setToken('')"
          flat
          v-if="token"
          :key="'Log out'"
          :to="'/logout'">
          <v-icon left dark>clear </v-icon>
          Log out
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        token: '',
        menuItems: [
          {icon: 'face', title: 'Sign in', link: '/signin'},
          {icon: 'lock_open', title: 'Sign up', link: '/signup'}
          // {icon: 'clear', title: 'Log out', link: '/logout'}
        ],
        sideNav: false
      }
    },
    methods: {
      setToken: function (logoutToken) {
        this.$store.dispatch('setToken', logoutToken)
      }
    },
    created () {
      // var tokens
      this.token = this.$store.state.user.token
      // this.token = tokens
    }
  }
</script>
