<template>
  <div>
    <div class="app__buttons">
      <h1>Vue.js</h1>
      <my-button @click="showDialog">Create Post</my-button>
      <my-input v-focus v-model="searchQuery" type="text" placeholder="search" />
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
    <div v-intersection="loadMorePosts" class="observer"></div>
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
      page: 1,
      limit: 10,
      totalPage: 0,
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
            "https://jsonplaceholder.typicode.com/posts/",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPage = Math.ceil(res.headers["x-total-count"] / this.limit);
          this.userData = res.data;
        }, 250);
      } catch (error) {
        // alert(error);
        console.log(error);
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        setTimeout(async () => {
          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts/",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPage = Math.ceil(res.headers["x-total-count"] / this.limit);
          this.userData = [...this.userData, ...res.data];
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
  computed: {
    sortedPost() {
      return [...this.userData].sort((e1, e2) => {
        return e1[this.selectSort]?.localeCompare(e2[this.selectSort]);
      });
    },
    sortedAndSearchPost() {
      return this.sortedPost.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.app__buttons {
  display: flex;
  justify-content: space-between;
}
.observer {
  /* height: 30px; */
  /* background: green; */
}
</style>
