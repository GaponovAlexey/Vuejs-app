<template>
  <div class="post" v-for="el in allData">
    <div><strong>Title: </strong> {{ el.title }}</div>
    <div>Body: {{ el.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    allData: {
      type: Array,
    },
  },
};
</script>
<style>
.post {
  padding: 15px;
  border: 1px solid teal;
  margin-top: 15px;
}
</style>
