import React, { Component } from "react";
import { connect } from "dva";
import styles from "./login.css";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import {withRouter} from 'dva/router'

interface Iprops{
  form:any,
  login:any,
  history:any
}

interface Istate{
  
}
@withRouter
class NormalLoginForm extends Component<Iprops,Istate> {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values).then(res=>{
          this.props.history.push('/')
        })
      }
    });
};

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.wrap}>
        <div className={styles.form}>
          <h2 className={styles.title}>登录</h2>
          <Form onSubmit={this.handleSubmit} className={styles.login_form}>
            <Form.Item>
              {getFieldDecorator("user_name", {
                rules: [
                  { required: true, message: "请输入正确的用户名" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="请输入用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("user_pwd", {
                rules: [
                  { required: true, message: "请输入正确的密码" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="请输入密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>记住密码</Checkbox>)}
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                登陆
              </Button>
              <Button
                type="primary"
                style={{
                  width: "100%",
                  background: "transparent",
                  color: "#1890ff",
                  border: "none"
                }}
              >
                立即注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default connect(
  (state) => {
    return {};
  },
  dispatch => {
    return {
      login(params) {
       return  dispatch({ type: "user/login", payload: params });
      }
    };
  }
)(WrappedNormalLoginForm);
