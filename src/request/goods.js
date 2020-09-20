import $axios from "@/common/http"//导入封装好的axios


// 获取菜单列表
export async function getGoods(page=6,size=3){
    let res = await $axios.get("/goodslist",{
        params:{
         size,
         page,
        }
    })

    if(res.code==200 && res.list){
         return res.list
    }else{
        return [];
    }
}

// 添加角色

export function addGoods(data){
  return $axios.post("/goodsadd",data)

}

// 修改角色
export function editGoods(data){
    return $axios.post('/goodsedit',data)
}

// 删除角色
export function delGoods(id){
    return $axios.post('/goodsdelete',{id})
}

// 获取数据总数
export async function getTotal(){
    let res = await $axios.get('/goodscount')
    return res.list[0].total;
}

