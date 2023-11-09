<template>
  <div>
    <b-modal
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
  </div>
</template>

<script>
export default {
  name: 'ModalEditComponent',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    editId: {
      type: Number,
      default: undefined,
    },
  },
  emits: ['close'],
  data: () => ({
    title: 'Register HouseRule',
    houseRule: {
      name: '',
      active: 1,
    },
    selectOptions: [
      { label: 'Active', value: 1 },
      { label: 'Inactive', value: 0 },
    ],
    loading: false,
  }),
  watch: {
    async editId() {
      if (this.editId !== undefined) {
        this.loading = true
        this.title = 'Edit HouseRule'
        const { data } = await this.$axios.$get(`/house_rules/${this.editId}`, {
          headers: {
            Authorization: this.$store.state.user.token,
          },
        })
        this.houseRule.name = data.name
        this.houseRule.active = data.active
        this.loading = false
      }
    },
  },
  methods: {
    async handleSave() {
      const aux = {
        house_rules: this.houseRule,
      }
      if (this.editId !== undefined) {
        try {
          await this.$axios.$put(`/house_rules/${this.editId}`, aux, {
            headers: {
              Authorization: this.$store.state.user.token,
            },
          })
          this.$bvToast.toast('HouseRule updated successfully!', {
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
      } else {
        try {
          await this.$axios.$post('/house_rules', aux, {
            headers: {
              Authorization: this.$store.state.user.token,
            },
          })
          this.$bvToast.toast('HouseRule created successfully!', {
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
  color: white !important;
}
.b-pagination .page-item .page-link {
  color: #fb3b11;
}
</style>
