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

  return {userDict, doSave}
})