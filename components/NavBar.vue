<template>
  <div class="navbar">
    <img v-if="logged" src="~/static/logo_text.png" alt="logo" class="logo" />
    <b-icon
      v-if="logged"
      icon="box-arrow-right"
      class="logout-icon"
      @click="logoutUser"
    />
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  computed: {
    logged() {
      return this.$store.state.user.token
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('user/logout')
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.navbar {
  height: 6.125rem;
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 2.25rem;
  padding-block: 1.25rem;
}
.navbar .logo {
  height: 100%;
}
.logout-icon {
  color: #fb3b11;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
