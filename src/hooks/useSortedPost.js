import { computed, ref } from "vue";

export function useSortPosts(posts) {
  const selectedSort = ref("");

  const useSortedPost = computed(() => {
    return [...posts.value].sort((e1, e2) =>
      e1[selectedSort.value]?.localeCompare(e2[selectedSort.value])
    );
  });
  console.log("inside", useSortedPost)
  console.log("inside,posts", posts)
  
  return {
    useSortedPost,
    selectedSort,
  };
}
