<template>
  <b-modal
    centered
    :visible="visible"
    title="Remove HouseRule"
    @close="handleCancel"
    @hide="handleCancel"
  >
    <div class="modal-text">
      <span>Do you want to remove this HouseRule?</span>
    </div>

    <template #modal-footer>
      <ButtonComponent @callback="handleCancel">No</ButtonComponent>
      <ButtonComponent secondary @callback="handleRemove">
        Yes
      </ButtonComponent>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalRemoveComponent',
  props: {
    visible: { type: Boolean, default: false },
    id: { type: Number, default: undefined },
  },
  emits: ['close'],
  methods: {
    async handleRemove() {
      try {
        const data = await this.$axios.$delete(`/house_rules/${this.id}`, {
          headers: { Authorization: this.$store.state.user.token },
        })
        this.$bvToast.toast(data.message, {
          title: 'Success',
          variant: 'success',
        })
        this.$emit('close')
      } catch (err) {
        this.$bvToast.toast(err.response.data, {
          title: 'Error',
          variant: 'danger',
        })
      }
    },
    handleCancel() {
      this.$emit('close')
    },
  },
}
</script>
