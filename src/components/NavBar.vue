<script lang="ts">
export default {
  props: ['view'],
  location: String,
  methods: {
    handleFilter(filter) {
      this.$emit('handleFilter', filter)
    },
    handleSort(sort) {
      this.$emit('handleSort', sort)
    },
    handleView(view) {
      this.$emit('handleView', view)
    }
  }
}
</script>

<template>
  <div class="navbar">
    <button v-if="view !== 'list'" @click="handleView($event.target.value)" value="list" class="navitem">View as
      list</button>
    <button v-if="view == 'list'" @click="handleView($event.target.value)" value="cards" class="navitem">View as
      cards</button>
    <button @click="handleSort($event.target.value)" value="phone" class="navitem">Sort on phonenumber?</button>
    <p>Office:</p>
    <label class="navitem">
      <input name="officeSelection" v-model="location" type="text">
      <button @click="handleFilter(location)">sök</button>
    </label>
    <label class="navitem">
      All
      <input name="officeSelection" @click="handleFilter($event.target.value)" value="all" type="radio">
    </label>
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  height: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin: 10px;
  display: flex;
  justify-content: end;
  flex-direction: row;
  align-items: center;
}

.navitem {
  margin: 10px;
}
</style>
