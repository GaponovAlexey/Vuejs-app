<template>
  <form @submit.prevent>
    <my-input v-focus v-model="post.title" placeholder="name" />
    <my-input v-model="post.body" placeholder="description" />
    <!-- inline style test -->
    <my-button
      style="align-self: flex-end; margin-top: 15px"
      @click="CreatePost"
      >send</my-button
    >
  </form>
</template>

<script>
export default {
  name: "post-form",
  data() {
    return {
      post: {
        id: Date.now(),
        title: "",
        body: "",
      },
    };
  },
  methods: {
    CreatePost(e) {
      if (this.post.body.length >= 3) {
        this.$emit("create", this.post);
        this.post = {
          title: "",
          body: "",
        };
      }
    },
  },
};
</script>

<!-- style -->

<style>
form {
  display: flex;
  flex-direction: column;
}
.btn {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
.btn:hover {
  background-color: rgb(175, 197, 197);
}
</style>
