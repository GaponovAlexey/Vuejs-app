<template>
  <PostItem :post="allData" />
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    allData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>

</style>
