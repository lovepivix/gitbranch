import { Form, Icon, Input, Button, Checkbox } from "antd";
import React from "react";
import style from "./index.less";
import {connect} from "dva";
import {withRouter} from 'dva/router'
const mapStateToProps=(state)=>({
  loading:state.loading
})
const mapDispatchToProps=(dispatch)=>({
  login(payload,callback){
      return  dispatch({ type: "user/login",payload,callback}) 
  }
})

@connect( mapStateToProps,mapDispatchToProps)
@withRouter
@Form.create()

class FormLogin extends React.Component {
  state={
    isFetch:this.props.loading.effects['user/login']
  }
  handleSubmit = e => {
  
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login({...values}).then(res=>{
           
           console.log("TCL: FormLogin -> this.props.history", this.props)
          this.props.history.push({pathname:'/'})
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    console.log(this.props.loading)
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item className={style.formItem}>
          {getFieldDecorator("user_name", {
            rules: [{ required: true, message: "Please input your 用户名!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="用户名"
            />
          )}
        </Form.Item>
        <Form.Item className={style.formItem}>
          {getFieldDecorator("user_pwd", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </Form.Item>
        <Form.Item className={style.formItem}>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox className={style.left}>记住密码</Checkbox>)}

          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            登录
          </Button>
          <Button type="link" block>
            立即注册 <span> {this.isFetch?'正在加载中。。。':''}</span>
          </Button>
         
        </Form.Item>
      </Form>
    );
  }
}
export default FormLogin;
