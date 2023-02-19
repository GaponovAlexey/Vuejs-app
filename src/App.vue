<template>
  <div class="app">
    <h1>Form</h1>
    <post-form @create="fromUserPost" />
    <post-List :allData="userData" />
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
    fromUserPost(post) {
      this.userData.push(post);
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
