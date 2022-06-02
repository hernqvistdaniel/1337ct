<script setup lang="ts">
import type { Presentation } from '@/models/presentation';

defineProps<{
  presentation: Presentation
}>()
</script>

<template>
  <p>{{ presentation.name }}</p>
</template>

<style scoped>
</style>
