<<<<<<< HEAD
import storage from './storage'

const objectQueryString = obj => {
  let str = "";
  Object.keys(obj).forEach(item => {
    if (obj[item]) {
      str += item + "=" + obj[item] + "&";
    }
  });
  return str.substr(0, str.length - 1);
};

const request = (url, method, data, headers) => {
  let urlPath = "/api" + url;
  const options = {
    headers: {
      "Content-type": "application/json; charset=utf-8",
      authorization: storage.get("token"),
      ...headers
    },
    credentials: "include",
    method
  };
  if (method === "GET" && Object.keys(data).length >= 1) {
    urlPath += "?" + objectQueryString(data);
  } else if (method !== "GET" && Object.keys(data).length >= 1) {
    options.body = JSON.stringify(data);
  }

  return fetch(urlPath, options).then(res => {
    return res.json().then(data => {
      if (res.ok && data.code === 1) {
        return Promise.resolve(data);
      } else {
        return Promise.reject(data);
      }
    });
  });
};

export default {
  get(url, data = {}, headers = {}) {
    return request(url, "GET", data, headers);
  },
  post(url, data = {}, headers = {}) {
    return request(url, "POST", data, headers);
  }
};
=======
/*
 * @Author: liangchen 
 * @Date: 2019-11-08 14:42:39 
 * @Last Modified by: liangchen
 * @Last Modified time: 2019-11-08 19:48:55
 */

function objToQueryString(data){
  
  if(!data||Object.keys(data).length<1){return ''}
  let str='?'
    Object.keys(data).forEach(item=>{
      str+=item+'='+data[item]+'&'
    })

  return str.slice(0,-1)
}
function request(method,url,options){
  const defaultOptions={
    method: 'get', // *GET, POST, PUT, DELETE, etc.
    credentials: 'include', // include, same-origin, *omit
    mode: 'cors', // no-cors, cors, *same-origin
    // redirect: 'follow', // manual, *follow, error
    // referrer: 'no-referrer', // *client, no-referrer
  }
  let init={
    ...defaultOptions, 
    headers: {
      'authorization':options.token||window.localStorage.getItem('token')
     },
  }

  
  let initUrl=url
  
  if(method==='get'){
    initUrl=(initUrl+objToQueryString(options.data)).replace(/(\/){2,}/,'$1')//去除路径上多余的/
    init={
      ...init,
    }
  }else if(method==='post'){
    init={
        ...init,
        method,
        headers: {
          ...init.headers,
          'content-type': 'application/json',
        
        },
        body: JSON.stringify(options.data), // must match 'Content-Type' header
    }
  }
 
  return fetch(initUrl,{
   ...init
  })
  .then(function(response) {
    if(response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(function(res) {
    console.log(res);
    return res
  }).catch(error => console.error('Error:', error));
}
export default request
>>>>>>> origin/dev
