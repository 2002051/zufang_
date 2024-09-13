<template>
  <div class="contain">
    <el-container>
      <el-main>
        <div class="detail">
          <div class="img">
            <el-image style="width: 200px; height: 200px" src="./../public/img/1686992239156.jpeg" :fit="fit"/>
          </div>
          <div class="info">
            <div class="title">
              <div class="status">
                <el-button color="blue">房屋状态</el-button>
                出租中
              </div>
            </div>
            <div class="name">名称：金桥爱立诚大厦 次卧小单间</div>
            <div class="price">价格：999/月</div>
            <div class="cate">类别：一居室</div>
            <div class="area">面积：90</div>
            <div class="create-time">创建时间：2023-06-17 16:56:40</div>
            <div class="addr">地址：北京市海淀区999</div>
            <div class="dis">
              <el-button type="primary">立即咨询</el-button>
            </div>
          </div>
        </div>

      </el-main>

      <el-aside width="400px">
        <div class="tag_select">
          <div class="favitour"><el-icon><Menu /></el-icon>加入心愿单(123)</div>
          <div class="collect"><el-icon><StarFilled /></el-icon>收藏(123)</div>
          <div class="save"><el-icon><Share /></el-icon>分享(123)</div>
        </div>

      </el-aside>
    </el-container>
  </div>
  <div class="other">

  </div>
</template>

<script setup>
import {Menu,StarFilled,Share} from '@element-plus/icons-vue'
</script>

<style scoped>
.contain {
  display: flex;
}

.contain .contain-left {
  float: right;
}

.detail {
  display: flex;
}

.info {
  margin-left: 50px;

}

.info div {
  padding-top: 20px;
}

.img {
  padding-top: 20px
}
.tag_select{
  margin-top: 50px;
  margin-left: 20px;
  width: 350px;
}
.tag_select div {
  padding: 10px;
  color: #343333;
  font-weight:600 ;
  font-size: 20px;
  border-bottom: 1px solid #dedede;
  display: flex;
  align-items: center;
  width: 350px;
  user-select: none;
}
.tag_select div:hover{
  color: #00a6be;
}
</style>