<template>
  <div>
    <h1>This is Another Page</h1>
    <p>Welcome to the other page!</p>
    <button @click="goBack">Go Back</button>
  </div>
</template>

<script>
export default {
  name: 'OtherPage',
  methods: {
    goBack() {
      // Kembali ke halaman sebelumnya
      this.$router.go(-1);
    }
  }
};
</script>

<style>
/* Gaya CSS untuk halaman lain */
</style>
