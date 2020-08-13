import {request} from "./request";

export function getHomeData(){
  return request({
    url: '/personalized/newsong'
  })
}