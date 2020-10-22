import {request} from "./request";

//综合搜索
export function getSearch(keywords,type,limit,offset){
  return request({
    url: '/search',
    params: {
      keywords,
      type,
      limit,
      offset
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

