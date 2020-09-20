// 获取菜单列表
import { getCategory  } from "@/request/category"

export default{
    namespaced:true,//命名空间
    state:{
        catelist:[]  //菜单列表   所有组件的共同的data,共享的是数据
    },
    getters:{
         catelist:state=>state.catelist//state：仓库里的数据可以写成下边形式
        // menulist (state){       
        //    return state.menulist
        // }
    },
    mutations:{
       SET_LIST(state,data){
          state.catelist = data;//仓库里的(state)里的menulist赋值给data(调用这个方法传递数据)
       }
    },
    actions:{
        // 请求菜单列表的数据
      async get_category_list({commit}){
          let res = await getCategory();
          commit('SET_LIST',res)
      },
    }
}