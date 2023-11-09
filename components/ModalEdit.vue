<template>
  <b-modal
    centered
    :visible="visible"
    :title="title"
    @close="handleClose"
    @hide="handleClose"
  >
    <div v-if="loading">Loading...</div>

    <div v-else class="modal-inputs">
      <InputComponent v-model="houseRule.name" label="Name" />
      <SelectComponent
        v-model="houseRule.active"
        label="Status"
        :options="selectOptions"
      />
    </div>

    <template #modal-footer>
      <ButtonComponent @callback="handleClose">Cancel</ButtonComponent>
      <ButtonComponent secondary @callback="handleSave">Save</ButtonComponent>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalEditComponent',
  props: {
    visible: { type: Boolean, default: false },
    id: { type: Number, default: undefined },
  },
  emits: ['close'],
  data: () => ({
    houseRule: { name: '', active: 1 },
    selectOptions: [
      { label: 'Active', value: 1 },
      { label: 'Inactive', value: 0 },
    ],
    loading: false,
  }),

  computed: {
    title() {
      return this.id ? 'Edit HouseRule' : 'Register HouseRule'
    },
  },

  watch: {
    async id() {
      if (this.id !== undefined) {
        this.loading = true
        const { data } = await this.$axios.$get(`/house_rules/${this.id}`, {
          headers: { Authorization: this.$store.state.user.token },
        })
        this.houseRule.name = data.name
        this.houseRule.active = data.active
        this.loading = false
      }
    },
  },

  methods: {
    async handleSave() {
      const aux = { house_rules: this.houseRule }
      let data
      try {
        if (this.id !== undefined) {
          data = await this.$axios.$put(`/house_rules/${this.id}`, aux, {
            headers: { Authorization: this.$store.state.user.token },
          })
        } else {
          data = await this.$axios.$post('/house_rules', aux, {
            headers: { Authorization: this.$store.state.user.token },
          })
        }

        this.$bvToast.toast(data.message, {
          title: 'Success',
          variant: 'success',
        })
        this.handleClose()
      } catch (err) {
        this.$bvToast.toast(err.response.data, {
          title: 'Error',
          variant: 'danger',
        })
      }
    },
    handleClose() {
      this.houseRule.name = ''
      this.houseRule.active = 1
      this.$emit('close')
    },
  },
}
</script>

<style>
.modal-inputs {
  display: grid;
  gap: 1rem;
}
.b-pagination .active .page-link {
  background-color: #fb3b11;
  border-color: #fb3b11;
  color: #fff !important;
}
.b-pagination .page-item .page-link {
  color: #fb3b11;
}
</style>
