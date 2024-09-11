<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HeadBar from "@/components/HeadBar.vue";
</script>

<template>
<div class="headBar">
  <HeadBar></HeadBar>
</div>
<div class="body"></div>

  <RouterView />
</template>

<style scoped>
.headBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: #fff;
  border-bottom: 1px solid #a6a5a5;
  z-index: 1000;
}

body {
  margin: 0;
  padding-top: 50px;
}
</style>
