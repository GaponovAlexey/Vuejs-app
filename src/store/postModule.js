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
      return [state.userData].sort((e1, e2) => {
        return e1[state.selectSort]?.localeCompare(e2[state.selectSort]);
      });
    },
    sortedAndSearchPost(state, getters) {
      return getters.sortedPost.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutation: {
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
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        commit("setLoading", false);
        this.totalPage = Math.ceil(res.headers["x-total-count"] / this.limit);
        this.userData = res.data;
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
};
