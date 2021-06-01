import request from '@/utils/request'
// import axios from 'axios'

export function login(data) {
  // const webHttpRequest = axios.create({
  //   url: 'http://localhost:8080/mp',
  //   method: 'get'
  // })
  // return
  // webHttpRequest().then(
  // (response) =>
  // request({
  //   url: '/vue-admin-template/user/login',
  //   method: 'post',
  //   data
  // })
  // ).catch(() =>
  //   console.log('sdasdsad')
  // )
  return request({
    url: 'com/rabbit/user/login',
    method: 'get',
    // url: '/vue-admin-template/user/login',
    // method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    // url: '/vue-admin-template/user/info',
    url: 'com/rabbit/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'com/rabbit/user/logout',
    method: 'post'
  })
}
