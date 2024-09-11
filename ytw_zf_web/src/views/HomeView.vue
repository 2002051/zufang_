

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" >
        <div class="l-side">
          <div class="l-category">
            <div class="l-title"><h3>房屋分类</h3></div>
            <div class="l-category-content">
              <el-text class="mx-1">一居室</el-text>
              <el-text class="mx-1">一居室</el-text>
              <el-text class="mx-1">一居室</el-text>
              <el-text class="mx-1">一居室</el-text>

            </div>
          </div>
          <div class="l-tag">
            <div class="l-title"><h3>配套设施(可多选)</h3></div>
            <div class="l-tag-content">

            </div>

          </div>
        </div>
      </el-aside>
      <el-main>主</el-main>
    </el-container>
  </div>
</template>

<script setup>

</script>


<style scoped lang="scss">
.l-side{

}
.l-category-content{
  border-bottom:1px solid #cccccc;
  padding-bottom: 60px;
  display: flex;
  //align-items: ;
}

.l-tag-content{
  border-bottom:1px solid #cccccc;
  padding-bottom: 60px;

}

</style>