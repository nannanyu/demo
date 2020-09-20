import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 导入相应模块
import menu from "./modules/menu"
import role from "./modules/role"
import user from "./modules/user"
import category from "./modules/category"
import specs from "./modules/specs"
import goods from "./modules/goods"

let store =new Vuex.Store({
    state:{
      iscollapse:false//默认打开
    },
    mutations:{
        TOGGLE(state){
            state.iscollapse = !state.iscollapse
        }
    },
    modules:{
        menu,role,user,category,specs,goods
    }
})

export default store;