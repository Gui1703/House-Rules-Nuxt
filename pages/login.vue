<template>
  <b-card style="max-width: 35rem" class="mb-2 mx-auto mt-4">
    <b-card-title>
      <div class="title">
        <span>Login</span>
        <img src="~/static/logo.png" alt="logo-pin" class="pin-logo" />
      </div>
    </b-card-title>

    <b-card-text>
      <b-form class="login-form needs-validation" @submit.prevent="onSubmit">
        <InputComponent
          v-model="form.email"
          label="Email"
          type="email"
          required
        />

        <InputComponent
          v-model="form.password"
          label="Password"
          type="password"
          required
        />

        <ButtonComponent type="submit" block>
          <b-spinner class="align-middle spinner-border-sm" v-if="loading" />
          Login
        </ButtonComponent>
      </b-form>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'LoginPage',
  middleware: ['login'],
  data: () => ({ form: { email: '', password: '' }, loading: false }),
  methods: {
    async onSubmit(event) {
      event.preventDefault()

      this.loading = true

      await this.$store
        .dispatch('user/loginUser', {
          login: { email: this.form.email, password: this.form.password },
        })
        .then(async (res) => {
          await this.$bvToast.toast(res.message, {
            title: 'Success',
            variant: 'success',
          })

          setTimeout(() => this.$router.push('/house-rules'), 2200)
        })
        .catch((e) => {
          this.$bvToast.toast(e.response.data.data, {
            title: 'Error',
            variant: 'danger',
          })
        })

      this.loading = false
    },
  },
}
</script>

<style scoped>
.title {
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title .pin-logo {
  height: 100%;
}

.login-form {
  display: grid;
  gap: 0.75rem;
  align-items: center;
}
</style>
