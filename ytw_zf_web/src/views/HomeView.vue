<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px">
        <div class="l-side">
          <div class="l-category">
            <div class="l-title"><h3>房屋分类</h3></div>
            <div class="l-category-content">
              <el-text class="mx-1" v-for="item in category_list">{{ item.title }}</el-text>


            </div>
          </div>
          <div class="l-tag">
            <div class="l-title"><h3>配套设施(可多选)</h3></div>
            <div class="l-tag-content">
              <el-tag
                  class="tag-item"
                  v-for="(item,index) in tag_list"
                  :key="index"
                  :type="(selected_tag_list.includes(item))?'success':'info'"
                  effect="dark"
                  round
                  @click="(selected_tag_list.includes(item))?selected_tag_list.splice(selected_tag_list.indexOf(item), 1):selected_tag_list.push(item)"
              >
                {{ item }}
              </el-tag>

            </div>

          </div>
        </div>
      </el-aside>
      <el-main>
        <div class="title">
          <div @click="thisTitle='最新'" v-if="'最新'!==thisTitle">最新</div>
          <div class="title_choiced" v-if="'最新'===thisTitle">最新</div>
          <div @click="thisTitle='最热'" v-if="'最热'!==thisTitle">最热</div>
          <div class="title_choiced" v-if="'最热'===thisTitle">最热</div>
          <div @click="thisTitle='推荐'" v-if="'推荐'!==thisTitle">推荐</div>
          <div class="title_choiced" v-if="'推荐'===thisTitle">推荐</div>
        </div>
        <div class="room">

          <div class="root_card" v-for="x in 20" @click="doJump">
            <div class="img">
              <el-image style="width: 300px; height: 200px" src="../../public/img/1686992239156.jpeg" :fit="fit" />
            </div>
            <div class="room-name">金桥爱立诚大厦 次卧小单间</div>
            <div class="price">年租-800元/月</div>
          </div>

        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import { useRouter } from 'vue-router';
import axios from 'axios';
const tag_list = ref(['冰箱', '空调', '洗衣机', '阳台', '吹风机', '卫生间', '电视机',])
const selected_tag_list = ref([])
const thisTitle = ref("最新")
const img_list = ref()
// const tag_items = ref([{label:1,},{},{}])
const router = useRouter();
const doJump = (x)=>{
  router.push('/detail');
}
const category_list = ref([]);

onMounted((e)=>{
  // console.log()
  axios.get("http://127.0.0.1:8000/myapp/index/classification/list").then((res)=>{
    // console.log("res",res.data.data)
    category_list.value = [...res.data.data]
    console.log("xxxxxx:",category_list.value)

  }).catch((err)=>{
    console.log("err",err)
  })

})

</script>


<style scoped lang="scss">
.l-side {

}

.l-title {

  text-align: center;
}

.mx-1 {
  margin: 10px auto;
}

.mx-1:hover {
  user-select: none;
  background-color: #e1e1e1;
}

.l-category-content {
  border-bottom: 1px solid #cccccc;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  //align-items: ;
}

.l-tag-content {
  border-bottom: 1px solid #cccccc;
  padding-bottom: 60px;

}

.tag-item {
  margin-left: 10px;
}

.title {
  display: flex;
}

.title div {
  margin-left: 30px;
  padding-bottom: 10px;
}

.title .title_choiced {
  border-bottom: 5px solid #060e80;
}

.room {
  margin-top: 20px;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;

}

.root_card {
  width: 320px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}
.root_card .img{
  display: flex;

  width: 300px;
  height: 200px;

}
.root_card .room-name{
  font-size: 18px;
  font-weight: bold;
  user-select: none;

}
.root_card .price{
  user-select: none;

}

</style>