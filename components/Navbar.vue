<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="3">创作</el-menu-item>
      <el-menu-item index="4">作品</el-menu-item>
      <el-menu-item index="5">课程</el-menu-item>
      <el-menu-item index="6">赛事</el-menu-item>
      <el-menu-item index="7">硬件产品</el-menu-item>
      <el-menu-item index="8">软件下载</el-menu-item>
      <div class="buttons">
        <el-button type="primary" size="small" @click="openLoginDialog">登录</el-button>
        <el-button type="primary" size="small">注册</el-button>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    ...mapMutations({
      openLoginDialog: 'user/openLoginDialog'
    })
  }
};
</script>

<style>
.buttons {
  float: right;
  margin-right: 20px;
  line-height: 60px;
}
</style>
