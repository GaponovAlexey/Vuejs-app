<template>
  <div class="post" v-for="post in post">
    <div><strong>name:</strong>{{ post.title }}</div>
    <div><strong>desc:</strong>{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 1px solid teal;
  margin-top: 15px;
}
</style>
