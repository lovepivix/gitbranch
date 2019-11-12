import React, { Component } from "react";
import { Layout, Button } from "antd";
import MenuExam from '@/components/MenuExam/index.js'
import style from './index.less'

import IsLogin from '@/components/Islogin'
const { Header, Sider, Content } = Layout;



@IsLogin
export class BaseLayout extends Component {
  render() {
    console.log(this.props)
    return (
      <>
        <Layout className={style.wrapper}>
          <Header>
            Header
          </Header>
          <Layout>
            <Sider>
              <MenuExam menu={this.props.routes}></MenuExam>
            </Sider>
            <Content>
              {/* <Question></Question> */}
             {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default BaseLayout;
