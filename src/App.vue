<template>
  <div class="app">
    <div>
      <h1>list post</h1>
      <my-button @click="showDialog">Create Post</my-button>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <h1>Form</h1>
      <post-form @create="CreatePost" />
    </my-dialog>
    <post-List
      v-if="userData.length > 0"
      :post="userData"
      @remove="DeletePost"
    />
    <div v-else>..Loading</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userData: [],
      title: "",
      body: "",
      dialogVisible: false,
      modificatorModel: "",
    };
  },
  methods: {
    CreatePost(post) {
      this.userData.push(post);
      this.dialogVisible = false;
    },
    DeletePost(e) {
      console.log(e.id);

      this.userData = this.userData.filter((p) => p.id !== e.id);
    },
    showDialog() {
      this.dialogVisible = !this.dialogVisible;
    },
    async fetchPost() {
      try {
        setTimeout(async () => {
          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/todos?_limit=10"
          );
          this.userData = res.data;
        }, 500);
      } catch (error) {
        alert(error);
      }
    },
  },
  beforeMount() {
    this.fetchPost();
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
