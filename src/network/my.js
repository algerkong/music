import {request} from "./request";

export function getLogin(login){
  return request({
    // https://autumnfish.cn/login/cellphone?phone=15234562389&password=1455048564
    url: '/login/cellphone',
    params: {
      phone: login.username,
      password:login.password
    }
  })
}

export function getUserDetail(uid){
  return request({
    url:'/user/detail',
    params:{
      uid
    }
  })
}


