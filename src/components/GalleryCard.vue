<script setup lang="ts">
import type { Presentation } from '@/models/presentation';

defineProps<{
  presentation: Presentation
}>()
</script>

<template>
  <div class="card">
    <div class="imgContainer">
      <img v-if="presentation?.imagePortraitUrl" class="cardImg" :src="presentation.imagePortraitUrl" />
      <p v-if="!presentation?.imagePortraitUrl">No picture</p>
    </div>
    <div class="cardInfo">
      <div class="texts">
        <p v-if="presentation?.name" class="cardText">{{ presentation.name }}</p>
        <p v-if="presentation?.office" class="cardText">Office: {{ presentation.office }}</p>
      </div>
      <div class="iconContainer">
        <a v-if="presentation?.linkedIn" :href="'http://linkedin.com/' + presentation.linkedIn">
          <font-awesome-icon class="icon" :icon="['fas', 'phone']" />

        </a>
        <a v-if="presentation?.gitHub" :href="'http://github.com/' + presentation.gitHub">
          <font-awesome-icon class="icon" :icon="['fas', 'gamepad']" />
        </a>
        <a v-if="presentation?.twitter" :href="'http://twitter.com/' + presentation.twitter">
          <font-awesome-icon class="icon" :icon="['fas', 'satellite']" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 5px 5px 15px 5px;
  width: 200px;
  height: 200px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}

.imgContainer {
  margin: auto;
}

.cardInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.texts {
  display: block;
}

.iconContainer {
  display: flex;
  flex-direction: row;
}

.icon {
  padding: 2px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.icon:hover {
  transform: scale(1.2);
}

.icon:visited {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

.cardText {
  font-size: 12px;
  font-weight: 600;
  text-align: left;
}

.cardImg {
  margin: auto;
  max-height: 120px;
  align-self: center;
}
</style>
