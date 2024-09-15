<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import HeadBar from "@/components/HeadBar.vue";
</script>

<template>
  <div class="headBar">
    <HeadBar></HeadBar>
  </div>

  <div class="body">
    <div class="sidebar-left">

    </div>
    <div class="main">
      <el-card style="">
        <RouterView />
      </el-card>
    </div>
    <div class="sidebar-right">

    </div>


  </div>


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

.main {
  width: 1400px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 100px;
}
.sidebar-left, .sidebar-right {
  padding-top: 50px;
  width: auto;
  max-width: 170px;
  background-color: #ccc; /* 假设你希望边栏有一个更深的灰色背景 */
}
.sidebar-left {
  float: left; /* 或者使用 flexbox 布局 */
}

.sidebar-right {
  float: right; /* 或者使用 flexbox 布局 */
}
</style>
