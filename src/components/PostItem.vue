<template>
  <div>
    <h3>list Users</h3>
  </div>
  <div class="post" v-for="post in posts" :key="posts.id" @remove="$emit('remove', post)">
    <div>
      <div><strong>name:</strong>{{ post.title }}</div>
      <div><strong>desc:</strong>{{ post.body }}</div>
    </div>
    <div class="btn_dell">
      <my-button @click="$emit('remove', post)">delete</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "post-item",
  props: {
    posts: {
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
