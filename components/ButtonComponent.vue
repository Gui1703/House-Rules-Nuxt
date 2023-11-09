<template>
  <div>
    <b-button
      class="normal"
      :class="[{ outlined: outlined, secondary: secondary }]"
      :type="type"
      :block="block"
      @click="$emit('callback')"
    >
      <slot />
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['callback'],
}
</script>

<style scoped>
.normal {
  background-color: #fb3b11;
  border-color: #fb3b11;
}
.outlined {
  background-color: transparent;
  border-color: #fb3b11;
  color: #fb3b11;
}
.secondary {
  background-color: #29a744;
  border-color: #29a744;
}
</style>
