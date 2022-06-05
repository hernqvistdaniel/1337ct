<script setup lang="ts">
import type { Presentation } from '@/models/presentation';

defineProps<{
  presentation: Presentation
}>()
</script>

<template>
  <li>
    <div class="texts">
      <p v-if="presentation?.name" class="cardText">{{ presentation.name }}</p>
      <p v-if="presentation?.office" class="cardText">Office: {{ presentation.office }}</p>

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
  </li>
</template>

<style scoped>
.texts {
  display: flex;
  flex-direction: row;
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
