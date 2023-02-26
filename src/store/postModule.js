import axios from "axios";

export const postModule = {
  state: () => ({
    userData: [],
    modificatorModel: "",
    selectSort: "",
    isLoading: false,
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPage: 0,
    sortOptions: [
      { value: "title", name: "sort of name" },
      { value: "body", name: "sort of body" },
    ],
  }),
  getters: {
    sortedPost(state) {
      return [...state.userData].sort((e1, e2) => {
        return e1[state.selectSort]?.localeCompare(e2[state.selectSort]);
      });
    },
    sortedAndSearchPost(state, getters) {
      return getters.sortedPost.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, userData) {
      state.userData = userData;
    },
    setPage(state, page) {
      state.page = page;
    },
    setmodificatorModel(state, modificatorModel) {
      state.modificatorModel = modificatorModel;
    },
    setSelectSort(state, selectSort) {
      state.selectSort = selectSort;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },

    setTotalPage(state, totalPage) {
      state.totalPage = totalPage;
    },
  },

  actions: {
    async fetchPost({ state, commit }) {
      try {
        commit("setLoading", true);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );

        commit(
          "setTotalPage",
          Math.ceil(res.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", res.data);
      } catch (error) {
        // alert(error);
        console.log(error);
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        // commit("setPage", state.page + 1, {root: true});
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPage",
          Math.ceil(res.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", [...state.userData, ...res.data]);
      } catch (error) {
        console.log("loadtwo", error);
      }
    },
  },
  namespaced: true,
};
