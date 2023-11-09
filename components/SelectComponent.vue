<template>
  <div>
    <label :for="name">{{ label }}</label>
    <select class="form-control" :id="name" v-model="model">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    value: { type: [String, Number], default: undefined },
    label: { type: String, default: '' },
    options: { type: Array, default: () => [] },
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
