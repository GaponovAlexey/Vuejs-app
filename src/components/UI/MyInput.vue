<template>
  <input :modelValue="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style>
.input {
  width: auto;
  border: 1px solid orange;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
