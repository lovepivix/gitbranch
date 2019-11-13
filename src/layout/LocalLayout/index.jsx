import React, { Component } from "react";
import { Layout, Menu, Icon, Form } from "antd";
import { withRouter } from "dva/router";
import Islogin from "@/utils/islogin";
import styles from "./style.less";
import Headers from "@/components/header";
import storage from "@/utils/storage";

const { Header, Sider, Content } = Layout;

@Islogin
@withRouter
class LocalLayout extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  hadlerChange = item => {
    this.props.history.push({
      pathname: item.key,
      state: { title: item.item.props.children }
    });
  };
  render() {
    const { routes } = this.props;
    const info = storage.get("info");
    return (
      <Layout style={{ minHeight: "100vh", width: "100vw" }}>
        <Header
          className="header"
          style={{ width: "100vw", background: "#fff" }}
        >
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"
            alt=""
            className={styles.img}
          />
          <div className={styles.right}>
            <span className={styles.icon}>
              
              {info && info.user_name}
            </span>
          </div>
        </Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["1"]}
            >
              {routes &&
                routes.map(item => (
                  <Menu.SubMenu
                    key={item.path}
                    title={
                      <span>
                        <Icon type={item.meta && item.meta.icon} />
                        <span>{item.meta && item.meta.title}</span>
                      </span>
                    }
                  >
                    {item.children &&
                      item.children.map(el => {
                        return el.meta.title !== "试题详情" ? (
                          <Menu.Item key={el.path} onClick={this.hadlerChange}>
                            {el.meta && el.meta.title}
                          </Menu.Item>
                        ) : (
                          ""
                        );
                      })}
                  </Menu.SubMenu>
                ))}
            </Menu>
          </Sider>
          <Layout>
            {this.props.location.pathname == "/question/look" ? (
              <Headers />
            ) : (
              <div className={styles.title}>
                {this.props.location.state != undefined
                  ? this.props.location.state.title
                  : ""}
              </div>
            )}
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                height: 280,
                overflowY: "auto"
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default LocalLayout;
