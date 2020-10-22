import {request} from "./request";

//首页入口图片
export function getBall(){
  return request({
    url: '/homepage/dragon/ball'
  })
}

//获取轮播
export function getBanner(){
  return request({
    url: '/banner?type=2'
  })
}

//获取首页数据
export function getHomeData(){
  return request({
    url: '/homepage/block/page?refresh=true'
  })
}

//获取新歌
export class NewSong{
  constructor(result) {
    this.id = result.id
    this.name = result.name
    this.img = result.picUrl
    this.author = result.artists.name
  }
}