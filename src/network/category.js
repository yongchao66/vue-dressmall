import { request } from './request.js'

export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getCurrent(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}


export function getCurrentGood(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
