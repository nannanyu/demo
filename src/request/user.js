import $axios from "@/common/http"//导入封装好的axios


// 获取菜单列表
export async function getUser(page=1,size=10){
    let res = await $axios.get("/userlist",{
        params:{
         size,
         page
        }
    })

    if(res.code==200 && res.list){
         return res.list
    }else{
        return [];
    }
}

// 添加角色

export function addUser(data){
  return $axios.post("/useradd",data)

}

// 修改角色
export function editUser(data){
    return $axios.post('/useredit',data)
}

// 删除角色
export function delUser(uid){
    return $axios.post('/userdelete',{uid})
}
