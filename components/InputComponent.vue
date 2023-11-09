<template>
  <div class="mb-3">
    <label :for="name">{{ label }}</label>
    <input
      class="form-control"
      :id="name"
      v-model="model"
      :type="type"
      :name="name"
      :required="required"
    />
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    value: {
      type: [String, Number],
      default: undefined,
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    name() {
      return this.label.toLowerCase()
    },
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
