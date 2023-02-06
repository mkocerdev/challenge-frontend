<template>
  <div class="relative" :tabindex="tabindex" @blur="open = false">
    <label v-if="label" class="mb-2 text-sm block">{{ label }}</label>
    <div :class="{ open: open }" @click="open = !open">
      <FormInput
        :value="labelKey ? selected[labelKey] : selected"
        v-bind="$attrs"
        disabled
      />
    </div>
    <div
      class="absolute w-full bg-white border-2 border-gray-300"
      :class="{ selectHide: !open }"
    >
      <div
        v-for="(option, i) of options"
        :key="i"
        class="p-2 cursor-pointer"
        @click="
          selected = option
          open = false
          $emit('input', valueKey ? option[valueKey] : option)
        "
      >
        {{ labelKey ? option[labelKey] : option }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    valueKey: {
      type: String,
      required: false,
      default: '',
    },
    labelKey: {
      type: String,
      required: false,
      default: '',
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    }
  },
  mounted() {
    this.$emit(
      'input',
      this.valueKey ? this.selected[this.valueKey] : this.selected
    )
  },
}
</script>
<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #666666;
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #ad8225;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: '';
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #ad8225;
  border-left: 1px solid #ad8225;
  border-bottom: 1px solid #ad8225;
  position: absolute;
  background-color: #0a0a0a;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #ad8225;
}

.selectHide {
  display: none;
}
</style>
