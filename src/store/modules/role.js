// 获取菜单列表
import { getRole } from "@/request/role"

export default{
    namespaced:true,
    state:{
        rolelist:[]  //菜单列表   所有组件的共同的data,共享的是数据
    },
    getters:{
         rolelist:state=>state.rolelist//state：仓库里的数据可以写成下边形式
        // menulist (state){       
        //    return state.menulist
        // }
    },
    mutations:{
       SET_LIST(state,data){
          state.rolelist = data;//仓库里的(state)里的menulist赋值给data(调用这个方法传递数据)
       }
    },
    actions:{
        // 请求菜单列表的数据
      async get_role_list({commit}){
          let res = await getRole();
          commit('SET_LIST',res)
      },
    }
}