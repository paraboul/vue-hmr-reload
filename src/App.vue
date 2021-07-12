<template>
  top view {{ foo }}!!!
  <router-view />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  console.log("Top view setup")
  const foo = ref(42);
</script>