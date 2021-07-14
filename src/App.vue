<template>
  top view {{ foo }}
  <router-view />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const foo = ref(42);
</script>