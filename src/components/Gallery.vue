<script lang="ts">
import GalleryCard from './GalleryCard.vue';

export default {
  components: { GalleryCard },
  props: ['filter', 'presentations', 'sort'],
  data() {
    return {
      filteredPres: null,
      sortedPres: null
    }
  },
  methods: {
    changeFilter() {
      console.log(this.filteredPres)
      this.filteredPres = this.presentations.filter(pres => {
        if (pres.office) {
          return pres.office.toLowerCase() == this.filter.toLowerCase()
        }
      })
      console.log(this.filteredPres)
    },
    changeSort() {
      console.log(this.sortedPres)
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
    console.log(this.presentations)
    this.filteredPres = this.presentations
    this.sortedPres = this.presentations
  }
}
</script>

<template>
  <div class="cardContainer">
    <GalleryCard v-for="(presentation, index) in filteredPres" :presentation="presentation" :id="index" />
  </div>
</template>

<style scoped>
.cardContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
