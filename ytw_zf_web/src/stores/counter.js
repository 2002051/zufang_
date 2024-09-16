import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {useCookies} from 'vue3-cookies'

const {cookies} = useCookies() // 导入vue3使用cookies

export const userInfoStore = defineStore('counter', () => {
  var userStr = ref(cookies.get("info"))
  const userDict = computed(() => JSON.parse(userStr.value))

  function doSave(info) {
    cookies.set("info", JSON.stringify(info), 10) // 单位分钟
    userStr.value = JSON.stringify(info)
  }
  function doSaveToken(token){

    cookies.set("token", JSON.stringify(token), 60*24*7)
    console.log("保存成功:",cookies.get("token"))
  }

  return {userDict, doSave,doSaveToken}
})