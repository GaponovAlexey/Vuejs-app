<template>
  <div class="app">
    <form class="form">
      <input class="input" type="text" placeholder="name" />
      <input class="input" type="text" placeholder="desc" />
      <button class="btn" >send</button>
    </form>
    <div class="post" v-for="post in post">
      <div><strong>name:</strong>{{ post.title }}</div>
      <div><strong>desc:</strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: [
        { id: 1, title: "javascript", body: "describe1" },
        { id: 2, title: "Go", body: "describe2" },
        { id: 3, title: "Rast", body: "describe3" },
        { id: 4, title: "Air", body: "describe3" },
      ],
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
      this.dislike -= 1;
    },
    addDislike() {
      this.dislike += 1;
      this.likes -= 1;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
.post {
  padding: 15px;
  border: 1px solid teal;
  margin-top: 15px;
}
.form {
  display: flex;
  flex-direction: col;
}
.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal ;
}
.input {
  width: 100%;
  border: 1px solid orange;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
