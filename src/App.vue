<template>
  <div class="app">
    <h1>Form</h1>
    <post-form @create="CreatePost" />
    <post-List :post="userData" @remove="DeletePost" />
  </div>
</template>

<script>
export default {
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
    CreatePost(post) {
      this.userData.push(post);
    },
    DeletePost(e) {
      console.log(e.id);

      this.userData = this.userData.filter((p) => p.id !== e.id);
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
