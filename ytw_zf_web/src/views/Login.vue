<template>
  <div class="father-box">

    <div class="box" v-if="!isRegister">
      <h1 style="text-align: center">用户登录</h1>
      <el-form :model="form" label-width="auto" style="max-width: 600px" label-position="top" :rules="formRules"
               ref="formRef">
        <el-form-item label="用户名" :error="formError.username" prop="username">
          <el-input v-model="form.username" style="width: 240px" placeholder="用户名"/>
        </el-form-item>
        <el-form-item label="密码" :error="formError.password" prop="password">
          <el-input v-model="form.password" style="width: 240px" placeholder="请输入密码"/>
        </el-form-item>
      </el-form>
      <el-form-item>
        <el-button type="primary" @click="doSubmit">登录</el-button>
        <span style="margin-left: 10px" @click="isRegister=true">没有账号?点击注册</span>
      </el-form-item>
    </div>

    <div class="box" v-if="isRegister">
      <h1 style="text-align: center">用户注册</h1>
      <el-form :model="registerForm" label-width="auto" style="max-width: 600px" label-position="top"
               :rules="registerRules"
               ref="formRef">
<!--        <el-form-item label="上传头像" prop="avator">-->
<!--          <el-upload-->
<!--              class="avatar-uploader"-->
<!--              action="http://127.0.0.1:8000/upload/"-->
<!--              :show-file-list="false"-->
<!--              :on-success="handleAvatarSuccess"-->
<!--              :before-upload="beforeAvatarUpload"-->
<!--          >-->
<!--            <img v-if="imageUrl" :src="imageUrl" class="avatar" style="width: 150px;height: 120px" />-->
<!--            <img v-if="!imageUrl" src="../assets/default.jpg" class="avatar" style="width: 150px;height: 120px" />-->
<!--            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>-->
<!--          </el-upload>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="昵称" :error="RegisterError.nick" prop="nick">-->
<!--          <el-input v-model="registerForm.nick" style="width: 240px" placeholder="昵称"/>-->
<!--        </el-form-item>-->
        <el-form-item label="用户名(邮箱)" :error="RegisterError.username" prop="username">
          <el-input v-model="registerForm.username" style="width: 240px" placeholder="用户名"/>
        </el-form-item>
        <el-form-item label="密码" :error="RegisterError.password" prop="password" type="password">
          <el-input v-model="registerForm.password" style="width: 240px" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item label="密码" :error="RegisterError.password" prop="password" type="password">
          <el-input v-model="registerForm.repassword" style="width: 240px" placeholder="请再次输入密码"/>
        </el-form-item>
<!--        <el-form-item label="性别">-->
<!--          <el-select v-model="registerForm.sex" placeholder="请选择性别">-->
<!--            <el-option label="保密" value="2"/>-->
<!--            <el-option label="男" value="1"/>-->
<!--            <el-option label="女" value="0"/>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
      </el-form>
      <el-form-item>
        <el-button type="primary" @click="doRegister">注册</el-button>
        <span style="margin-left: 10px" @click="isRegister=false;registerForm.avator='/media/avator/default.jpg'">立即登录</span>
      </el-form-item>
    </div>


  </div>
  <!--  <v-form-designer></v-form-designer>-->

</template>

<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router"
import {userInfoStore} from "@/stores/counter.js";
import _axios from "@/plugin/axios.js";
import {ElMessage} from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

const formRef = ref("")
const store = userInfoStore()
const isRegister = ref(false)

const router = useRouter()
const error = ref("")
const form = ref({
  username: "",
  password: "",
})

const formError = ref({
  username: "",
  password: ""
})

const RegisterError = ref({
  nick:"",
  username: "",
  password: "",
  repassword:""
})

const registerForm = ref({
  // nick: "",
  // avator: "/media/avator/default.jpg", // 默认头像
  // sex: "",
  username: "",
  password: "",
  repassword:"",
})


const formRules = ref({
  username: [
    {required: true, message: "用户名不能为空", trigger: "blur"}
  ],
  password: [
    {required: true, message: "密码不能为空", trigger: "blur"}
  ]
})

const registerRules = ref({
  nick: [{
    required: true, message: "昵称不能为空"
  }],
  username: [
    {required: true, message: "用户名不能为空", trigger: "blur"}
  ],
  password: [
    {required: true, message: "密码不能为空", trigger: "blur"}
  ]
})


const doSubmit = function () {
  formRef.value.validate((x) => {
    if (!x) {
      return false
    }
  })
  Object.keys(formError.value).forEach((x) => {
    formError.value[x] = ""
  })
  error.value = ""
  _axios.post("/myapp/index/user/login", form.value).then((res) => {
    console.log("res", res)
    if (res.data.code !== 0) {
      ElMessage.error(res.data.msg)
    } else {
      // 登录成功，将token存储在cookies中
      store.doSaveToken(res.data.data.token)
      store.doSave = {...res.data.data}
      ElMessage({
        message: '登录成功!',
        type: 'success',
      })
      // router.push({"name": "home"})
      // 返回上一页并重新加载
      router.go(-1); // 返回上一页
      setTimeout(() => {
        window.location.reload(); // 重新加载页面
      }, 50);
    }
  })
}
const imageUrl = ref("")
const handleAvatarSuccess = (response, uploadFile) => {
  console.log("response",response)
  console.log(uploadFile,typeof uploadFile)
  registerForm.value.avator = response.path   // 图片路径
  imageUrl.value = URL.createObjectURL(uploadFile.raw);
};
const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('必须是图片格式!');
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片大小不能大于2MB');
    return false;
  }
  return true;
};

function doRegister(){
  let isEmpty = Object.values(registerForm.value).some(val => !val);
  if(isEmpty){
    ElMessage.error('请将信息填写完整');
  }else{
    _axios.post("/myapp/index/user/register",registerForm.value).then(function (res) {
      console.log("注册结果",res)
      if(res.data.code===0){
        ElMessage({
          message: '注册成功!',
          type: 'success',
        })
        // window.location.reload();

      }else{
        ElMessage.error(res.data.detail.msg[0]);
      }
    })




  }
}

</script>

<style scoped>
.father-box{

}

.box {
  width: 300px;
  margin: 100px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 水平偏移量 垂直偏移量 模糊半径 阴影颜色 */
  border: 1px solid transparent; /* 为了让阴影显示出来，设置一个透明的边框 */
  padding: 10px 30px;
  border-radius: 10px;
  background-image: url("../public/bg.jpg");
  background-size: cover; /* 背景图片缩放以覆盖整个容器 */
  background-position: center; /* 背景图片居中显示 */
  background-repeat: no-repeat;

}


</style>