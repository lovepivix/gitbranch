import React, { Component } from "react";
import style from "./index.less";
import { Card } from "antd";
import FormLogin from "../../components/FormLogin";

export class Login extends Component {
  render() {
    return (
      <div className={style.wrapper}>
      
          <Card title="登录" bordered={false}  className={style.card}>
            <FormLogin></FormLogin>
          </Card>
       
      </div>
    );
  }
}

export default Login;
