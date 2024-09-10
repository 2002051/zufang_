<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HeadBar from "@/components/HeadBar.vue";
</script>

<template>

<div class="headBar">
  <HeadBar></HeadBar>
</div>


  <RouterView />
</template>

<style scoped>
.headBar{

}
</style>
