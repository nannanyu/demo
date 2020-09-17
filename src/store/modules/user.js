// 获取菜单列表
import { getUser, getTotal} from "@/request/user"


export default{
    namespaced:true,
    state:{
        userlist:[],  //菜单列表   所有组件的共同的data,共享的是数据
        page:1,
        size:5,
        total:0,
        },
    getters:{
         userlist:state=>state.userlist,//state：仓库里的数据可以写成下边形式
        // menulist (state){       
        //    return state.menulist
        // }
      
        page:state=>state.page,
        size:state=>state.size,
        total:state=>state.total
       
        // size:state=>state.size,
        // page:state=>state.page
    },
    mutations:{
       SET_LIST(state,data){
          state.userlist = data;//仓库里的(state)里的menulist赋值给data(调用这个方法传递数据)
       },
       SET_PAGE(state,data){
             state.page = data;
       },
       SET_SIZE(state,data){
          state.size = data;
       },
       SET_TOTAL(state,data){
           state.total = data;
       }
    },
    actions:{
        // 请求菜单列表的数据
      async get_user_list({commit,state,dispatch}){
          let res = await getUser(state.page,state.size);
          commit('SET_LIST',res)
        //   请求数量
        dispatch('get_user_total')

      },
      async get_user_total({commit,state}){
          let res = await getTotal(state.total);
          commit('SET_TOTAL',res)
      },
      set_page({commit,dispatch},data){
          commit('SET_PAGE',data);
          dispatch('get_user_list')
      },
      set_size({commit,dispatch}){
          commit('SET_SIZE',data);
          dispatch('get_user_list')
      }
    }
}