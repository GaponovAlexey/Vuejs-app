<!-- <template>
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

<style></style> -->

<template>
  <h1>hi</h1>
  <div>one {{ count }}</div>
  <div>two</div>
  <button @:click="add" >+</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count ++
    }
  }
};
</script>
