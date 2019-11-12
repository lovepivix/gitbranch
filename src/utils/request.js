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
