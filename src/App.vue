<template>
  <div class="app">
  <PostForm  />
  <PostList :post="post" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "./components/PostList.vue";

export default {
  components: {
    PostForm,
    PostList,
  },
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
  methods: {
    CreatePost(e) {
      // e.stopPropagation()
      // e.preventDefault()
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.post.push(newPost);
      this.title = "";
      this.body = "";
    },
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
</style>
