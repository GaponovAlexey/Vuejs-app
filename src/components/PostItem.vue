<template>
  <div>
    <h3>list Users</h3>
  </div>
  <TransitionGroup name="list" tah="ul">
    <div class="post" v-for="post in posts" :key="posts.id">
      <div>
        <div><strong>name:</strong>{{ post.title }}</div>
        <div><strong>desc:</strong>{{ post.body }}</div>
      </div>
      <div class="btn_dell">
        <my-button @click="onClick(post)">delete</my-button>
      </div>
    </div>
  </TransitionGroup>
</template>

<script>
export default {
  name: "post-item",
  emits: ["remove"], // add remove to the emits option
  methods: {
    onClick(post) {
      this.$emit("remove", post);
    },
  },
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
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
</style>
