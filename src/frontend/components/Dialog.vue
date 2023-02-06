<template>
  <div class="fixed right-0 top-0 z-50 flex items-center justify-center">
    <div
      class="absolute left-0 top-0 opacity-40 bg-black-800 flex items-center justify-center"
    ></div>
    <div
      class="relative bg-white p-6 m-3 w-96 border-2 drop-shadow-xl"
      :class="getClasses"
    >
      <div class="text-lg font-bold">
        <p>{{ title }}</p>
      </div>
      <div class="text-base">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'success',
      required: false,
      validator: (value) => ['success', 'error', 'warning'].includes(value),
    },
  },
  computed: {
    getClasses() {
      switch (this.type) {
        case 'success':
          return 'border-green-700'
        case 'error':
          return 'border-red-700'
        case 'warning':
          return 'border-yellow-700'
        default:
          return 'border-yellow-700'
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.$emit('close', false)
    }, 3000)
  },
}
</script>
