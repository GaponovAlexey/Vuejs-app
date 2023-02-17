<template>
  <form @submit.prevent class="form">
    <input v-model="post.title" class="input" type="text" placeholder="name" />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="description"
    />
    <!-- inline style test -->
    <MyButton class="btn" style="align-self: flex-end" @click="CreatePost"
      >send</MyButton
    >
  </form>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: {
    MyButton,
  },
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
  cursor: pointer;
}
.btn:hover {
  background-color: rgb(175, 197, 197);
}
.input {
  width: 100%;
  border: 1px solid orange;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
