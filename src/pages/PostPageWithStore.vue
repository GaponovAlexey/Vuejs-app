<template>
  <div>
    start{{ $store.state.likes }} getter : {{ $store.getters.doubleLikes }}
    <div>
      <button @click="$store.commit('incrementLikes')">+</button>
      <button  @click="$store.commit('decrementLikes')">-</button>
      <div>
        {{ $store.state.isAuth ? "Auth" : " No" }}
      </div>
      <button  @click="$store.commit('changeIsAuth')">-</button>

    </div>
  </div>
</template>

<script>
export default {
  name: "PostPageWithStore",
};
</script>

<style scoped></style>
