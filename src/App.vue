<script setup>
</script>
<template>
  <component :is="this.$route.meta.layout || 'div'">
    <RouterView /> 
    <!-- hiển thị component liên kết với route hiện tại. -->
  </component>
</template>
<style scoped>
</style>
