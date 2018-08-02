<template>
  <div>
    <el-container>
      <el-header>
        <sites-navbar />
      </el-header>
      <el-main>
        <nuxt />
      </el-main>
      <el-footer></el-footer>
    </el-container>
    <sites-login-dialog />
  </div>
</template>


<script>
import Navbar from "../components/Navbar.vue";
import LoginDialog from "../components/LoginDialog.vue";

export default {
  data() {
    return {};
  },
  components: {
    "sites-navbar": Navbar,
    "sites-login-dialog": LoginDialog
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.el-header {
  padding: 0;
}
</style>

