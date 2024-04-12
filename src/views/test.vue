<template>
  <h3>Hello Test</h3>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  async created() {
    const LoginData = await axios.get("user");
    console.log(LoginData);
  },
};
</script>

<style>
</style>