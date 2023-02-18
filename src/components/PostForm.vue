<template>
  <form @submit.prevent>
    <my-input v-model="post.title" type="text" placeholder="name" />
    <my-input v-model="post.body" type="text" placeholder="description" />
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
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    CreatePost(e) {
      if (this.post.body.length >= 3) {
        this.post.id = Date.now();
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
