<template>
  <div>
    <h3>list Users</h3>
  </div>
<div class="post" v-for="post in allData">
    <div><strong>name:</strong>{{ post.title }}</div>
    <div><strong>desc:</strong>{{ post.body }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      post: {

      }
    }
  }
</script>

<style>
</style>