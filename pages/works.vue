<template>
  <div class="works-box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    <el-input placeholder="请输入内容" class="input-with-select">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
.works-box {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.input-with-select {
  width: 270px;
}
</style>
