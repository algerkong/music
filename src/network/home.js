import {request} from "./request";

// export function getHomeData(){
//   return request({
//     // url: '/personalized/newsong'
//     url: '/search?keywords=爱'
//   })
// }


export function getBanner(){
  return request({
    url: '/banner?type=2'
  })
}

export function getHomeData(){
  return request({
    url: '/homepage/block/page?refresh=true'
  })
}




export class NewSong{
  constructor(result) {
    this.id = result.id
    this.name = result.name
    this.img = result.picUrl
    this.author = result.artists.name
  }
}