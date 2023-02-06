<template>
  <div>
    <label v-if="label" class="mb-2 text-sm block">{{ label }}</label>
    <input
      ref="input"
      v-bind="$attrs"
      class="w-full p-2 bg-transparent focus:outline-none h-10 text-sm border-2 border-gray-300 text-gray-800"
      v-on="inputListeners"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputListeners() {
      const self = this
      return {
        ...this.$listeners,
        input(e) {
          self.$emit('input', e.target.value)
        },
      }
    },
  },
}
</script>

<style></style>
