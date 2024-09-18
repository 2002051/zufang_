<template>
  <div class="box">
    <div class="left">
      <div class="logo"><h3>租房</h3></div>
      <div class="search">
        <el-input v-model="input" style="width: 280px" placeholder="搜索"/>
        <el-icon size="20px" style="margin-left: 10px">
          <Search/>
        </el-icon>
      </div>
    </div>
    <div class="right">
      <div class="backEntry">后台入口</div>
<!--  未登录    -->
      <div class="Login" v-if="!is_login">
        <el-button type="success" round @click="gotoLogin">登录</el-button>
      </div>
<!--  已登录    -->
      <div class="status" v-if="!!is_login">
        <el-avatar :size="30" src="https://empty" @error="errorHandler">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
        </el-avatar>
        已登录
      </div>
      <div class="News">
        <el-icon size="28px">
          <Bell/>
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {Search, Bell} from '@element-plus/icons-vue'
import router from "@/router/index.js";
import {useCookies} from 'vue3-cookies'
import {userInfoStore} from "@/stores/counter.js";


const {cookies} = useCookies() // 导入vue3使用cookies
const input = ref('')

const gotoLogin = (e)=>{
  router.push('login')
}
const userinfo = ref({})
const is_login = ref(false)



onMounted((e)=>{
  let token = cookies.get("token");
  let store = userInfoStore();
  is_login.value = !!token;
  // console.log("store",store.userDict)
  userinfo.value = store.userDict
  // console.log("userinfo",userinfo)
  console.log("userStr",store.userStr)
})


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

.right div {
  margin-right: 50px;
}
.right .status{
  display: flex;
  justify-content: center;
  align-items: center;
}

.right .backEntry {
  user-select: none;
  color: #00a6be;
}

.right .backEntry:hover {
  color: #060e80;
}




</style>