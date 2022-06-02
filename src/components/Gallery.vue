<script lang="ts">
import { useStore } from 'vuex'
import { key } from '../store'
import { computed } from 'vue'
import { Presentation } from '@/models/presentation';
import GalleryCard from './GalleryCard.vue';

export default {
  count: Number,
  presentation: Presentation,

  components: { GalleryCard },
  setup() {
    const store = useStore(key)

    store.dispatch('fetchPresentations')

    return {
      presentations: computed(() => store.state.presentations),
      store
    }
  },
}
</script>

<template>
  <h1>Gallery</h1>
  <div v-for="(presentation, index) in presentations">
    <GalleryCard :presentation="presentation" :id="index" />
  </div>
</template>

<style scoped>
</style>
