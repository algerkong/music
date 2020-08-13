import {request} from "./request";

//综合搜索
export function getSearch(keywords,type){
  return request({
    url: '/search',
    params: {
      keywords,
      type
    }
  })
}

//单曲搜索

export function getHotSearch(){
  return request({
    url: '/search/hot/detail'
  })
}

export function getDetailSearch(){
  return request({
    url:'/search/default'
  })
}

