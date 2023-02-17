<template>
  <div class="post" v-for="post in allData">
    <div><strong>name:</strong>{{ post.title }}</div>
    <div><strong>desc:</strong>{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    allData: {
      type: Array,
      required: true,
    },
  },
  
};
</script>

<style >
.post {
  padding: 15px;
  border: 1px solid teal;
  margin-top: 15px;
}
</style>
