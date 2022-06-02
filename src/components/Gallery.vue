<script lang="ts">
import { useStore } from 'vuex'
import { key } from '../store'
import { defineProps, computed } from 'vue'
import { Presentation } from '@/models/presentation';
import GalleryCard from './GalleryCard.vue';

export default {
  count: Number,
  presentation: Presentation,

  components: { GalleryCard },
  setup() {
    const store = useStore(key)
    return {
      abba: computed(() => true/*store.state.presentations*/)
    }
  },
}

defineProps<{
  presentations: Presentation[],
}>()
</script>

<template>
  <h1>Gallery</h1>
  <p>{{ abba }}</p>
  <div v-for="(presentation, index) in presentations">
    <GalleryCard :presentation="presentation" :id="index" />
  </div>
</template>

<style scoped>
</style>
