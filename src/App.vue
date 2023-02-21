<template>
  <div class="app">
    <div class="app__buttons">
      <h1>Vue.js</h1>
      <my-button @click="showDialog">Create Post</my-button>
      <my-input v-model="searchQuery" type="text" placeholder="search" />
      <my-select v-model="selectSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <h1>Form</h1>
      <post-form @create="CreatePost" />
    </my-dialog>
    <post-List
      v-if="userData.length > 0"
      :post="sortedAndSearchPost"
      @remove="DeletePost"
    />
    <div v-else>..Loading</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  emits: ["remove"],
  data() {
    return {
      userData: [],
      dialogVisible: false,
      modificatorModel: "",
      selectSort: "",
      searchQuery: "",
      sortOptions: [
        { value: "title", name: "sort of name" },
        { value: "body", name: "sort of body" },
      ],
    };
  },
  methods: {
    CreatePost(post) {
      this.userData.unshift(post);
      this.dialogVisible = false;
    },
    DeletePost(e) {
      this.userData = this.userData.filter((p) => p.id !== e.id);
    },
    showDialog() {
      this.dialogVisible = !this.dialogVisible;
    },
    async fetchPost() {
      try {
        setTimeout(async () => {
          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          this.userData = res.data;
        }, 250);
      } catch (error) {
        // alert(error);
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchPost();
  },
  // watch: {
  //   selectSort(newValue) {
  //     this.userData.sort((post1, post2) => {
  //       return post1[newValue]?.localeCompare(post2[newValue]);
  //     });
  //   },
  // },
  computed: {
    sortedPost() {
      return [...this.userData].sort((e1, e2) => {
        return e1[this.selectSort]?.localeCompare(e2[this.selectSort]);
      });
    },
    sortedAndSearchPost() {
      return this.sortedPost.filter(post => post.title.includes(this.searchQuery))
    }
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
.app__buttons {
  display: flex;
  justify-content: space-between;
}
</style>
