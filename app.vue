<script setup lang="ts">
const { data } = await useAppFetch('/api/test')
</script>

<template>
  <div>
    <h1>{{ data }}</h1>
  </div>
</template>
