import React, { Component } from 'react';
import {Redirect} from 'dva/router'

function IsLogin(Comp){
     
    return class IsLogin extends Component {
        state={
            islogin:false
        }
        static getDerivedStateFromProps(props,state){
            let user=window.localStorage.getItem('token');
           
           return {
            islogin:user?true:false
           }
        }
        render() {
            let {islogin}=this.state;
        
            return (
                islogin?<Comp {...this.props}/>:<Redirect to='/default/login'/>
            );
        }
    }
}

export default IsLogin;
