<template>
  <form @submit.prevent class="form">
    <input class="input" v-model="post.title" type="text" />
    <input class="input" v-model="post.body" type="text" />
    <button class="btn" @click="CreatePost">add</button>
  </form>
</template>

<script>
export default {
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
      this.$emit("post", this.post);
    },
  },
};
</script>

<style>
.form {
  display: flex;
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
