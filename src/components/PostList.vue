<template>
  <post-item :posts="post" @remove:="$emit('remove', post)" :key="post.id" />
</template>

<script>
export default {
  name: "post-List",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
