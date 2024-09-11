<template>
  <div className="box">
    <div className="left">
      <div className="logo"><h3>租房</h3></div>
      <div className="search">
        <el-input v-model="input" style="width: 280px" placeholder="搜索"/>
        <el-icon size="20px" style="margin-left: 10px">
          <Search/>
        </el-icon>
      </div>
    </div>
    <div className="right">
      <div className="backEntry">后台入口</div>
      <div className="Login">
        <el-button type="success" round>登录</el-button>
      </div>
      <div className="News">
        <el-icon size="28px">
          <Bell/>
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {Search, Bell} from '@element-plus/icons-vue'

const input = ref('')
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding-left: 50px;
  padding-right: 50px;
  border-bottom: 1px solid #a6a5a5;
  background: linear-gradient(to right, #e7fac3, #bffae3); /* 添加淡色系的渐变背景 */
}

.box .left {
  display: flex;
}

.box .left .logo {
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box .left .search {
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.right .Login {
  margin-right: 50px;
}

.right .backEntry {
  margin-right: 50px;
  user-select: none;
  color: #00a6be;
}

.right .backEntry:hover {
  color: #060e80;
}
</style>