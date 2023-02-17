<template>
  <div class="app">
    <h1>Form</h1>
    <userForm />
    <userList :allData="userData" />
  </div>
</template>

<script>
import userForm from "./conp2/userForm.vue";
import userList from "./conp2/userList.vue";

export default {
  components: {
    userForm,
    userList
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
    addData() {
      const newData = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.userData.push(newData);
      this.body = "";
      this.title = "";
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
