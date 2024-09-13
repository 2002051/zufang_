<template>
<div class="contain">
  <el-container>
    <el-main>
      <div class="detail">
        <div class="img">
          <el-image style="width: 200px; height: 200px" src="./../public/img/1686992239156.jpeg" :fit="fit" />
        </div>
        <div class="info">
          <div class="title">
            <div class="status">    <el-button color="blue">房屋状态</el-button>  出租中</div>
          </div>
          <div class="name">名称：金桥爱立诚大厦 次卧小单间</div>
          <div class="price">价格：999/月</div>
          <div class="cate">类别：一居室</div>
          <div class="area">面积：90</div>
          <div class="create-time">创建时间：2023-06-17 16:56:40</div>
          <div class="addr">地址：北京市海淀区999</div>
          <div class="dis"> <el-button type="primary">立即咨询</el-button></div>
        </div>
      </div>

    </el-main>

    <el-aside width="400px">右边</el-aside>
  </el-container>

</div>
</template>

<script setup>

</script>

<style scoped>
.contain{
  display: flex;
}
.contain .contain-left{
  float: right;
}
.detail{
  display: flex;
}
.info{
  margin-left: 50px;

}
.info div{
  padding-top: 20px;
}
.img{padding-top: 20px}
</style>