<template>
  <button
    v-bind="$attrs"
    class="flex items-center focus:outline-none text-white px-3 py-2 rounded"
    :class="`bg-${variant}`"
    v-on="$listeners"
    @click="click"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: null,
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'danger'].includes(value),
    },
  },
  methods: {
    click($event) {
      if (this.to) {
        $event.preventDefault()
        this.$router.push(this.to)
      }
    },
  },
}
</script>
