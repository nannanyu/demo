<template>
  <div>
    <h3 class="logo">小U商城后台</h3>
    <!-- 菜单组件 -->
    <el-menu class="page-menu" background-color="#444" text-color="#fff" router :default-active="$route.path" :collapse="iscollapse"> 
     <el-menu-item index="/index"><i class="el-icon-house"></i><span slot="title">后台首页</span></el-menu-item>
       <el-submenu index="2">
           <template slot="title"><i class="el-icon-setting"></i><span slot="title">系统设置</span></template>
             <el-menu-item index="menu">菜单管理</el-menu-item>
           <el-menu-item index="role">角色管理</el-menu-item>
           <el-menu-item index="user">管理员管理</el-menu-item>
       </el-submenu>
       <el-submenu index="3">
           <template slot="title"><i class="el-icon-goods"></i><span slot="title">商城管理</span></template>
           <el-menu-item index="gategory">分类管理</el-menu-item>
            <el-menu-item index="specs">商品规格</el-menu-item>
           <el-menu-item index="goods">商品管理</el-menu-item>
            <el-menu-item index="member">会员管理</el-menu-item>
           <el-menu-item index="banner">轮播图管理</el-menu-item>
            <el-menu-item index="sekill">秒杀管理</el-menu-item>
          
       </el-submenu>
       
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {};
  },
  computed:{
      ...mapState(['iscollapse'])
  },
  created() {},
  methods: {},
  components: {},
};
</script>
<style scoped>
.logo {
  line-height: 60px;
  text-align: center;
  color: #ffffff;
  background-color: #666;
  white-space: nowrap;
  overflow: hidden;
}
.page-menu{
  border-right: none;
}
</style>