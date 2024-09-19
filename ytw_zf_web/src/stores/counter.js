import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {useCookies} from 'vue3-cookies'

const {cookies} = useCookies() // 导入vue3使用cookies

export const userInfoStore = defineStore('counter', () => {
  const userStr = ref(cookies.get("info"))
  const userDict = computed(() => userStr.value)
  const token = ref(cookies.get("token"))
  function doSave(info) {
    console.log("存储info:",info)
    console.log("存储info:",JSON.stringify(info))
    cookies.set("info", JSON.stringify(info), 60 * 60 * 24) // 单位分钟
    userStr.value = JSON.stringify(info)
  }
  function doSaveToken(token){

    cookies.set("token", token, 60*24*7)
    console.log("保存成功:",cookies.get("token"))
  }

  return {userDict, doSave,doSaveToken,token}
})