<template>
  <div class="navbar">
    <div style="cursor: pointer" @click="$router.push('/')">Vue 3</div>
    <div>
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px"
        >About</my-button
      >
      <my-button @click="$router.push('/store')" style="margin-left: 20px"
        >store</my-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: teal;
  box-sizing: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
</style>
