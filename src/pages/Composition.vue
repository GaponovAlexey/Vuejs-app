<template>
  <div>
    <div class="app__buttons">
      <h1>Vue.js</h1>
      <my-input
        v-focus
        :module-value="searchQuery"
        @update:model-value="setSearchQuery"
        type="text"
        placeholder="search"
      />
      <my-select
        :mode-value="selectSort"
        @update:model-value="setSelectSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <h1>Form</h1>
      <post-form @create="CreatePost" />
    </my-dialog>
    <post-List v-if="userData.length > 0" :post="sortedAndSearchPost" />
    <div v-else>..Loading</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import { usePosts } from "../hooks/usePosts";
import { useSortPosts } from "../hooks/useSortedPost";
import { useSortedAndSearch } from "../hooks/useSortedAndSearch";

// import axios from "axios";

export default {
  name: "Composition",
  emits: ["remove"],
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "sort of name" },
        { value: "body", name: "sort of body" },
      ],
    };
  },
  methods: {},
  mounted() {},
  computed: {},
  setup(props) {
    const { userData, totalPage } = usePosts(10);
    console.log("outside", userData)
    
    const { selectedSort, useSortedPost } = useSortPosts(userData);
    console.log("outside",useSortedPost )
    
    const { searchQuery,sortedAndSearchPost } = useSortedAndSearch(useSortedPost);
    // console.log("sortedPost", useSortedPost);
    // console.log("sortedAndSearchPost", sortedAndSearchPost);

    return {
      userData,
      // totalPage,
      // sortedPost,
      // selectedSort,
      // searchQuery,
      sortedAndSearchPost,
    };
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
