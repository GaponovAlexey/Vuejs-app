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
      <MyButton>delete</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
export default {
  components: {
    MyButton
  },
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
