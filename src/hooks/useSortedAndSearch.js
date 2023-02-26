import { computed, ref } from "vue";

export function useSortedAndSearch(posts) {
  const searchQuery = ref("");

  const sortedAndSearchPost = computed(() => {
    return posts.value.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return {
    sortedAndSearchPost, searchQuery
  }
}
