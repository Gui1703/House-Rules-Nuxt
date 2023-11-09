<template>
  <b-card style="max-width: 35rem" class="mb-2 mx-auto mt-4">
    <b-card-title>
      <div class="title">
        <span>Login</span>
        <img src="~/static/logo.png" alt="logo-pin" class="pin-logo" />
      </div>
    </b-card-title>

    <b-card-text>
      <b-form class="login-form needs-validation" @submit="onSubmit">
        <InputComponent
          v-model="form.email"
          label="Email"
          required
          type="email"
        />

        <InputComponent
          v-model="form.password"
          label="Password"
          type="password"
          required
        />

        <ButtonComponent type="submit" block>Login</ButtonComponent>
      </b-form>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    form: {
      email: '',
      password: '',
    },
  }),
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      await this.$store
        .dispatch('user/loginUser', {
          login: { email: this.form.email, password: this.form.password },
        })
        .then(async (res) => {
          await this.$bvToast.toast(res.message, {
            title: 'Success',
            variant: 'success',
          })

          setTimeout(() => this.$router.push('/house-rules'), 2000)
        })
        .catch((e) => {
          this.$bvToast.toast(e.response.data.data, {
            title: 'Error',
            variant: 'danger',
          })
        })
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
