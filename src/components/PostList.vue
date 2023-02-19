<template>
  <post-item :post="allData" />
</template>

<script>
export default {
  name: "post-List",
  props: {
    allData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
