<template>
  <div>
    <div class="app__buttons">
      <h1>Vue.js</h1>
      <my-button @click="showDialog">Create Post</my-button>
      <my-input
        v-focus
        :module-value="searchQuery"
        @update:model-value="setSearchQuery"
        type="text"
        placeholder="search"
      />
      <my-select :mode-value="selectSort"
      @update:model-value="setSelectSort"
      :options="sortOptions" />
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
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "PostPageWithStore",
  emits: ["remove"],
  data() {
    return {
      dialogVisible: false,
    };
  },

  computed: {
    ...mapState({
      userData: (state) => state.post.userData,
      dialogVisible: (state) => state.post.dialogVisible,
      modificatorModel: (state) => state.post.modificatorModel,
      selectSort: (state) => state.post.selectSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPage: (state) => state.post.totalPage,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPost: "post/sortedPost",
      sortedAndSearchPost: "post/sortedAndSearchPost",
    }),
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectSort: "post/setSelectSort",
    }),
    ...mapActions({
      fetchPost: "post/fetchPost",
      loadMorePosts: "post/loadMorePosts",
    }),
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
  },
  mounted() {
    this.fetchPost();
  },
};
</script>

<style scoped></style>
