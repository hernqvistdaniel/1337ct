<script lang="ts">
import NavBar from './components/NavBar.vue';
import Gallery from './components/Gallery.vue';
import { useStore } from 'vuex'
import { key } from './store'
import { computed } from 'vue'

export default {
  components: { NavBar, Gallery },
  data() {
    return {
      filter: null,
      sort: null,
      title: 'The fellowship of the tretton37'
    }
  },
  setup() {
    const store = useStore(key)
    if (store) {
      store.dispatch('fetchPresentations')
    }

    return {
      presentations: computed(() => {
        return store.state.presentations
      }),
      store
    }
  },
  methods: {
    passFilter(incFilter: string) {
      this.filter = incFilter
    },
    passSort(incSort: string) {
      this.sort = incSort
    }
  }
}
</script>


<template>
  <header>
    <h1 class="title">{{ title }}</h1>
  </header>
  <main>
    <div class="wrapper">
      <NavBar @handleSort="passSort($event)" @handleFilter="passFilter($event)" />
      <Gallery v-if="presentations.length > 0" :presentations="presentations" :sort="sort" :filter="filter" />
    </div>
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.title {
  padding: 10px;
}

@media (min-width: 1024px) {}
</style>
