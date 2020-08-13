import {request} from "./request";

export function getSongDetail(){
  return request({
    url: '/song/detail'
  })
}