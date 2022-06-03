<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Gallery from './components/Gallery.vue';
const title = 'The fellowship of the tretton37';
</script>


<template>
  <header>
    <h1 class="title">{{ title }}</h1>
  </header>
  <main>
    <div class="wrapper">
      <NavBar />
      <Gallery />
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
