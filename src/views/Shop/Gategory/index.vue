<template>
 <div>
     <el-button class="btn" type="primary" @click="add">添加分类</el-button>
     <!-- 列表组件 -->
     <v-list @edit="edit"></v-list>
     <!-- 添加修改组件 -->
     <v-info :info="info" ref="dialog"></v-info>
 </div>
</template>

<script>
// 导入组件
import VList from "./vlist"
import VInfo from "./vinfo"
export default {
 data(){
 return{
     info:{
         isAdd:false,
         isShow:false
     }
 }
 },
 created(){},
 methods:{
     add(){
         this.info.isAdd = this.info.isShow =true
     },
     edit(val){
         this.info.isAdd = false;
         this.info.isShow = true;
         this.$refs.dialog.setinfo(val)
         console.log(val)
     }
 },
 components:{
     VList,VInfo
 }
}

</script>
<style scoped>
.btn{
    margin-bottom: 20px;
}
</style>