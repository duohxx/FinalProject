/*
能发送ajax请求的函数模块
函数的返回值是promise对象
 */
/* eslint-disable*/ 
import axios from 'axios'
const baseUrl = ''
// const baseUrl = 'http://localhost:4000'
export default function ajax(url, data={}, type='GET') {
  url = baseUrl + url
  if(type==='GET') { 
    // data: {username: tom, password: 123}
    // paramStr: username=tom&password=123
    let paramStr = ''
    Object.keys(data).forEach(key => {
      paramStr += key + '=' + data[key] + '&'
    })
    if(paramStr) {
      paramStr = paramStr.substring(0, paramStr.length-1)
    }
    return axios.get(url + '?' + paramStr)
  } else {
    return axios.post(url, data)
  }
}
