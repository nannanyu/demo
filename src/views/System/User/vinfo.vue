<template>
  <el-dialog
    :title="info.isAdd ? '添加管理员':'修改管理员'"
    @close="cancel"
    :visible.sync="info.isShow"
    width="40%"
  >
    <!-- 表单 -->
    <el-form :model="forminfo" ref="form" :rules="rules" label-width="140px">
      <el-form-item label="管理员角色" prop="roleid">
        <el-select v-model="forminfo.roleid" placeholder="请选择">
          <el-option
            v-for="item in rolelist"
            :key="item.id"
            :label="item.rolename"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="管理员名称" prop="username">
        <el-input v-model="forminfo.username" placeholder="请输入管理员名称"></el-input>
      </el-form-item>

      <el-form-item label="管理员密码" prop="password">
        <el-input v-model="forminfo.password" placeholder="请输入管理员密码"></el-input>
      </el-form-item>

      <el-form-item label="管理员状态">
        <el-switch v-model="forminfo.status" :active-value="1" :inactive-value="2"></el-switch>
      </el-form-item>
      <el-form-item label>
        <el-button type="primary" @click="sumbit">提交</el-button>
        <el-button type="warning" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
// 导入  添加和修改的 请求封装方法！
import { addRole, editRole } from "@/request/role";
import { mapGetters, mapActions } from "vuex";
let defaultItem = {
  roleid: "",
  username: "",
  password: "",
  status: 1, // 状态1正常2禁用
};
let resetItem = { ...defaultItem };
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {
          isAdd: true,
          isShow: false,
        };
      },
    },
  },
  data() {
    return {
      forminfo: { ...defaultItem },
      rules: {
        // 验证规则对象！
        roleid: [{ required: true, message: "必填！", trigger: "blur" }],
        username: [{ required: true, message: "必填！", trigger: "blur" }],
      },
     
    };
  },
  computed: {
    ...mapGetters({
      rolelist: "role/rolelist",
    }),
  },
  mounted() {
    if (!this.rolelist.length) {
      this.get_role_list();
    }
  },
  methods: {
    ...mapActions({
      
      get_role_list: "role/get_role_list",
    }),
    setinfo(val) {
      // 将数据赋给默认defaultItem; 赋给表单
      // 将权限节点，回显到树中去！
      let idarr = val.menus.split(",");
      if (idarr[0]) {
        this.checkStrictly = true; // 父子互不关联！
        // 等到节点渲染完成再做某个事情！ this.$nextTick(()=>{  等到vue把节点渲染完成再做某些事情！ })
        this.$nextTick(() => {
          this.$refs.tree.setCheckedKeys(idarr);
          this.checkStrictly = false; // 又要父子互相关联！
        });
      }
      defaultItem = { ...val };
      this.forminfo = { ...val };
    },
    async sumbit() {
       if(this.isAdd && !this.forminfo.password){
           this.message.warning("请输入密码")
           return;
       }
      // 表单验证！
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          // 如果验证通过！
          let res;
          if (this.info.isAdd) {
            // 添加还是修改！
            res = await addRole(this.forminfo);
          } else {
            res = await editRole(this.forminfo);
          }
          if (res.code == 200) {
            this.$message.success(res.msg);
            this.info.isShow = false;
            this.get_role_list(); // 重新获取角色列表！
            this.cancel();
          } else {
            this.$message.error(res.msg);
          }
        }
      });
    },
    reset() {
      if (this.info.isAdd) {
        // 添加时候的重置！
        this.forminfo = { ...resetItem };
        this.$refs.tree.setCheckedKeys([]);
      } else {
        // 修改时候的重置！
        this.setinfo({ ...defaultItem });
      }
    },
    cancel() {
      this.$refs.tree.setCheckedKeys([]);
      this.forminfo = { ...resetItem };
    },
  },
  components: {},
};
</script>
<style scoped>
</style>