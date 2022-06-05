<script lang="ts">
import GalleryCard from './GalleryCard.vue';
import ListView from './ListView.vue'

export default {
  components: { GalleryCard, ListView },
  props: ['filter', 'presentations', 'sort', 'view'],
  data() {
    return {
      filteredPres: null,
      sortedPres: null
    }
  },
  methods: {
    changeFilter() {
      if (this.filter == 'all') {
        this.filteredPres = this.presentations
      } else {
        this.filteredPres = this.presentations.filter(pres => {
          if (pres.office) {
            return pres.office.toLowerCase() == this.filter.toLowerCase()
          }
        })
      }
    },
    changeSort() {
      this.sortedPres = this.presentations.sort((a, b) => {
        if (a.phoneNumber && b.phoneNumber) {
          return a.phoneNumber.localeCompare(b.phoneNumber)
        }
      })
    }
  },
  watch: {
    filter() {
      this.changeFilter()
    },
    sort() {
      this.changeSort()
    }
  },
  mounted() {
    this.filteredPres = this.presentations
    this.sortedPres = this.presentations
  }
}
</script>

<template>
  <div v-if="presentations && presentations.length > 0" class="cardContainer">
    <GalleryCard v-if="view !== 'list'" v-for="(presentation, index) in filteredPres" :presentation="presentation"
      :id="index" />
    <ul v-if="view == 'list'">
      <ListView v-for="(presentation, index) in filteredPres" :presentation="presentation" :id="index" />
    </ul>
  </div>
  <div v-else class="cardContainer">
    <p>Could not fetch any users</p>
  </div>
</template>

<style scoped>
.cardContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 40px;
}
</style>
