// 获取菜单列表
import { getUser } from "@/request/user"

export default{
    namespaced:true,
    state:{
        userlist:[],  //菜单列表   所有组件的共同的data,共享的是数据
        page:1,
        size:10
        },
    getters:{
         userlist:state=>state.userlist//state：仓库里的数据可以写成下边形式
        // menulist (state){       
        //    return state.menulist
        // }
    },
    mutations:{
       SET_LIST(state,data){
          state.userlist = data;//仓库里的(state)里的menulist赋值给data(调用这个方法传递数据)
          console.log( state.userlist)
       }
    },
    actions:{
        // 请求菜单列表的数据
      async get_user_list({commit,state}){
          let res = await getUser(state.page,state.size);
          commit('SET_LIST',res)
      },
    }
}