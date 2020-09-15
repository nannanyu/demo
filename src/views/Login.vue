<template>
  <el-row class="login-bg">
    <el-col :span="12" class="login-box">
      <h3>小U商城管理系统</h3>
      <el-form :v-model="forminfo" ref="form">
        <el-form-item>
          <el-input v-model="forminfo.username" placeholder="请输入账号">
            <template slot="prepend">
              <i class="el-icon-user"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="forminfo.password" show-password aria-placeholder="请输入密码">
            <template slot="prepend">
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-it>
          <el-button class="login-btn" type="primary">立即登录</el-button>
        </el-form-it>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      forminfo: {
        username: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {},
  components: {},
};
</script>
<style scoped>
.login-bg {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/img/bg.jpg");
  background-size: 100% 100%;
}
.login-bg .login-box {
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0 0 0 0.2);
  padding: 30px 40px;
  border-radius: 5px;
  border: 1px solid #eee;
}
.login-bg .login-box h3 {
  text-align: center;
}
.login-btn {
  width: 100%;
}
</style>