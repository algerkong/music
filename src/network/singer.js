import {request} from "./request";

export function getSinger(id) {
  return request({
    url: '/artists',
    params: {
      id
    }
  })
}

