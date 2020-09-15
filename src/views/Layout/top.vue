<template>
  <div class="header">
    <div class="lt">
      <el-button type="primary" v-if="iscollapse" @click="TOGGLE" class="el-icon-s-unfold"></el-button>
       <el-button type="primary" v-else @click="TOGGLE" class="el-icon-s-fold"></el-button>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="mbx">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button v-if='$route.path!="/index"' @click="$router.back()" size="small" class="el-icon-back" round></el-button>
    </div>
    <div>
      <el-dropdown>
        <span class="el-dropdown-link el-icon-s-custom">
          XX你好
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item ><i class="el-icon-full-screen"></i>全屏操作</el-dropdown-item>
           <el-dropdown-item ><i class="el-icon-switch-button"></i>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex"
export default {
  data() {
    return {};
  },
  computed:{
    ...mapState(['iscollapse'])
  },
  created() {},
  methods: {
      ...mapMutations(['TOGGLE'])
  },
  components: {},
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.header .lt {
  display: flex;
  align-items: center;
}
.header .mbx {
  margin: 0 20px;
}
</style>