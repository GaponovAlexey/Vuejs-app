<template>
  <form @submit.prevent class="form">
    <input v-model="post.title" class="input" type="text" placeholder="name" />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="description"
    />
    <button class="btn" @click="CreatePost">send</button>
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
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>
<style>
.form {
  display: flex;
  flex-direction: column;
}
.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
.input {
  width: 100%;
  border: 1px solid orange;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
