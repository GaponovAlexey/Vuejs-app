<template>
  <div>
    <h3>list Users</h3>
  </div>
  <div class="post" v-for="post in post">
    <div>
      <div><strong>name:</strong>{{ post.title }}</div>
      <div><strong>desc:</strong>{{ post.body }}</div>
    </div>
    <div class="btn_dell">
      <my-button>delete</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-item',
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
