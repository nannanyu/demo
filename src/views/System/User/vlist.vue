<template>
  <div class="table-bg">
      <el-table  :data="userlist">
          <el-table-column prop="uid" label="UID" align="center"></el-table-column>
          <el-table-column prop="username" label="管理员名称" align="center"></el-table-column>
          <el-table-column label="管理员角色" align="center">
              <template slot-scope="scope">
                  <el-tag type="success">{{scope.row.rolename}}</el-tag>
              </template>
          </el-table-column>
          <el-table-column label="状态">
              <template slot-scope="scope">
                  <el-tag type="success" v-if="scope.row.status==1">启用</el-tag>
                  <el-tag type="danger" v-if="scope.row.status==2">禁用</el-tag>
              </template>
          </el-table-column>
          <el-table-column label="修改">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="edit(scope.row)" circle icon="el-icon-edit"></el-button>
                    <el-button type="danger" size="small"  @click="del(scope.row.uid)"  circle icon="el-icon-delete"></el-button>
                </template>
          </el-table-column>
      </el-table>
  </div>
</template>
<script>
import { mapGetters,mapActions } from "vuex"
import { delUser } from "@/request/user"
export default {
    data(){
        return{
        }
    },
    computed: {
        ...mapGetters({
            userlist:"user/userlist"
        })
    },
    mounted() {
        if(!this.userlist.length){
            this.get_user_list();
        }
    },
    methods:{
        ...mapActions({
            
            get_user_list:"user/get_user_list"
            
        }),
        edit(val){
            this.$emit('edit',{...val})
        },
        async del(uid){
            this.$confirm('确认删除吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async ()=>{
                let res = await delUser(uid);
                if(res.code==200){
                    this.$message.success(res.msg)
                    this.get_user_list(); // 重新获取列表！
                }else{
                    this.$message.error(res.msg)
                }
            }).catch(()=>{})
        }
    },
    components:{}
}
</script>
<style scoped>
</style>