import $axios from "@/common/http"//导入封装好的axios


// 获取菜单列表
export async function getSpecs(page=6,size=3){
    let res = await $axios.get("/specslist",{
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

export function addSpecs(data){
  return $axios.post("/specsadd",data)

}

// 修改角色
export function editSpecs(data){
    return $axios.post('/specsedit',data)
}

// 删除角色
export function delSpecs(id){
    return $axios.post('/specsdelete',{id})
}

// 获取数据总数
export async function getTotal(){
    let res = await $axios.get('/specscount')
    return res.list[0].total;
}

