<template>
  <div class="app">
    <h1>Form</h1>
    <post-form @create="fromUserPost" />
    <PostList :allData="userData" />
  </div>
</template>

<script>
// import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";

export default {
  components: {
    // PostForm,
    PostList,
  },
  data() {
    return {
      userData: [
        { id: 1, title: "kid", body: "canada" },
        { id: 2, title: "million", body: "canada" },
        { id: 3, title: "home", body: "USA" },
      ],
      title: "",
      body: "",
    };
  },
  methods: {
    fromUserPost(post) {
      this.userData.push(post)
    },
  },
};
</script>

<style scoped>
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  max-width: 50rem;
}
.app {
  padding: 20px;
}
h1 {
  text-align: center;
}
</style>
