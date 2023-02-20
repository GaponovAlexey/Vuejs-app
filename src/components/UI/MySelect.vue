<template>
  <select  :modelValue="modelValue" @change="changeOptions">
    <option disabled value="">Select from list</option>
    <option
      v-for="options in options"
      :key="options.value"
      :value="options.value"
    >
      {{ options.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
      // default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOptions(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped></style>
