import request from '../utils/request';

export function fetchLogin({user_name,user_pwd}) {
  // method,url,options
  return request('post','/api/user/login',{
    data:{
      user_name,
      user_pwd
    }
  });
}
export function fetchUserInfo({token}) {
  // method,url,options
  return request('GET','/api/user/userInfo',{
    token
  });
}
