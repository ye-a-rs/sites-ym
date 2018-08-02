<template>
  <el-dialog title="用户登录" width="400px" :visible="loginDialogVisible" :show-close="false">
    <el-form :model="form" status-icon :rules="rules" label-width="50px">
      <el-form-item label="帐号" prop="identity">
        <el-input v-model="form.identity"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">提交</el-button>
        <el-button @click="closeLoginDialog">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      form: {
        identity: "",
        password: ""
      },
      rules: {}
    };
  },
  computed: {
    loginDialogVisible() {
      return this.$store.state.user.loginDialogVisible;
    }
  },
  methods: {
    login() {
      this.$store.commit("user/login", {
        identity: this.form.identity,
        password: this.form.password
      });
    },
    ...mapMutations({
      closeLoginDialog: "user/closeLoginDialog"
    })
  }
};
</script>