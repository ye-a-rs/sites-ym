<template>
  <div class="works-box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="推荐" name="first"><sites-worksdetail /></el-tab-pane>
      <el-tab-pane label="课外作品" name="second"><sites-worksdetail /></el-tab-pane>
      <el-tab-pane label="参赛作品" name="third"><sites-worksdetail /></el-tab-pane>
      <el-tab-pane label="课堂作业" name="fourth"><sites-worksdetail /></el-tab-pane>
      <el-tab-pane label="专题" name="fifth"><sites-worksdetail /></el-tab-pane>
    </el-tabs>
    
    <el-input placeholder="请输入作品名/用户名" class="input-with-select">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
import WorksDetail from "../components/worksdetail";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      activeName: "first"
    };
  },
  components: {
    "sites-worksdetail": WorksDetail
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
.el-main {
  background-color: rgba(230, 230, 230, 0.5);
}
.works-box {
  width: 1140px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.el-tabs__item {
  /* height: 30px;
  line-height: 30px; */
}
.el-tabs__header {
  margin-top: 20px;
  margin-bottom: 10px;
}
.el-tabs__nav-wrap::after {
  background-color: unset;
}
.input-with-select {
  width: 240px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 20px;
}
</style>
