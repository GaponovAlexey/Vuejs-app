<template>
  <h1>
    <Add/>
    <div>
      <button v-on:click="addLike" >Like</button>
      <button @click="addDislike" >Dislike</button>
    </div>
    <div>
      Количество лайков: <strong>{{ likes }}</strong>
    </div>
    <div>
      Количество дизлайков: <strong>{{ dislike }}</strong>
    </div>
  </h1>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislike: 5,
    };
  },
  methods: {
    addLike() {
      this.likes += 1
      this.dislike -= 1
    },
    addDislike() {
      this.dislike += 1
      this.likes -= 1  
    }
  }
};
</script>

<style></style>
