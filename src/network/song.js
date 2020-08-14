import {request} from "./request";

//歌曲信息
export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

//歌曲播放地址
export function  getSongUrl(id){
  return request({
    url:'/song/url',
    params:{
      id
    }
  })
}

//歌曲歌词
export function getSongText(id){
  return request({
    url:'/lyric',
    params:{
      id
    }
  })
}

//歌曲是否可用
export function getIsSong(id) {
  return request({
    url: '/check/music',
    params: {
      id
    }
  })
}

//歌曲评论
export function getSongComments(id,limit,offset) {
  return request({
    url: '/comment/music',
    params: {
      id,
      limit,
      offset
    }
  })
}

//评论点赞
/*
* 必选参数 :
id : 资源 id, 如歌曲 id,mv id
cid : 评论 id
t : 是否点赞 ,1 为点赞 ,0 为取消点赞
type: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型
0: 歌曲   1: mv   2: 歌单   3: 专辑   4: 电台   5: 视频   6: 动态
* */
export function isGood(id,cid,t,type) {
  return request({
    url: 'comment/like',
    params: {
      id,
      cid,
      t,
      type
    }
  })
}

//歌曲mv信息
export function getMvDetail(mvid){
  return request({
    url: '/mv/detail',
    params: {
      mvid
    }
  })
}

//mv地址
export function getMv(id){
return request({
    url: '/mv/url',
    params: {
      id
    }
  })
}

//MV评论
export function getMvComments(id,limit,offset) {
  return request({
    url: '/comment/mv',
    params: {
      id,
      limit,
      offset
    }
  })
}


//歌曲详情
export class Songs {
  constructor(songs, privileges) {
    this.name = songs.name  //歌曲名称
    this.id = songs.id      //歌曲id
    this.author = songs.ar  //歌曲作者
    this.album = songs.al   //歌曲专辑
    this.img = songs.al.picUrl //歌曲图片
  }
}