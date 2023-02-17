<template>
  <form @submit.prevent class="form">
      <input class="input" v-model="title" type="text" />
      <input class="input" v-model="body" type="text" />
      <button class="btn" @click="addData">add</button>
    </form>
</template>

<script>

</script>

<style>

.form {
  display: flex;
  flex-direction: column;
}
.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
.input {
  width: 100%;
  border: 1px solid orange;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>