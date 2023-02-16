<template>
  <div class="app">
    <form class="form">
      <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        placeholder="name"
      />
      <input
        v-bind:value="body"
        @input="body = $event.target.value"
        class="input"
        type="text"
        placeholder="description"
      />
      <button class="btn" @click="CreatePost">send</button>
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
      title: "",
      body: "",
    };
  },
  
};
</script>

<style>
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  max-width: 50rem;
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
