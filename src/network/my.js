import {request} from "./request";

export function getLogin(login){
  return request({
    // https://autumnfish.cn/login/cellphone?phone=15234562389&password=1455048564
    url: '/login/cellphone',
    withCredentials: true, //关键  跨域请求
    params: {
      phone: login.username,
      password:login.password,
      timestamp:new Date().getTime()
    }
  })
}

export function logOut(){
  return request({
    url: '/logout',
    xhrFields: { withCredentials: true }
  })
}


export function getLoginState(uid){
  return request({
    url:'/login/status'
  })
}


export function getUserDetail(uid){
  return request({
    url:'/user/detail',
    xhrFields: { withCredentials: true },
    params:{
      uid
    }
  })
}

export function getHistoryCount(uid,type){
  return request({
    url:'/user/record',
    params:{
      uid,
      type
    }
  })
}



