<template>
  <Navbar />
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
  max-width: 75%;
}
h1 {
  text-align: center;
}
</style>
