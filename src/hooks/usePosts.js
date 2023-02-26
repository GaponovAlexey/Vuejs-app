import axios from "axios";
import { onMounted, ref } from "vue";

export function usePosts(limit) {
  const userData = ref([]);
  const totalPage = ref(0);
  const fetching = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/",
        {
          params: {
            _page: 1,
            _limit: limit,
          },
        }
      );
      totalPage.value = Math.ceil(res.headers["x-total-count"] / limit);
      userData.value = res.data;
    } catch (error) {
      // alert(error);
      console.log(error);
    }
  };
  onMounted(fetching)
  return {
    userData, totalPage
  }
  // onCreated()
  // computed()
  // watch()
}
