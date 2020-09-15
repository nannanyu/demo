// 获取菜单列表
import { getMenu } from "@/request/menu"

export default{
    namespaced:true,//命名空间
    state:{
        menulist:[]  //菜单列表   所有组件的共同的data,共享的是数据
    },
    getters:{
         menulist:state=>state.menulist//state：仓库里的数据可以写成下边形式
        // menulist (state){       
        //    return state.menulist
        // }
    },
    mutations:{
       SET_LIST(state,data){
          state.menulist = data;//仓库里的(state)里的menulist赋值给data(调用这个方法传递数据)
       }
    },
    actions:{
        // 请求菜单列表的数据
      async get_menu_list({commit}){
          let res = await getMenu();
          commit('SET_LIST',res)
      },
    }
}