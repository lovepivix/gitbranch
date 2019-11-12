import React from 'react'
import { Menu, Icon, Button } from 'antd';
import {withRouter} from 'dva/router'
import storage from '@/utils/storage.js'
const { SubMenu } = Menu;

@withRouter
class MenuExam extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
      defaultSelectedKeys:[storage.getItem('sidebar')&&storage.getItem('sidebar').path||'/question/questionList'],
      defaultOpenKeys:[this.props.location.pathname]
    };
    this.handleClick= this.handleClick.bind(this)
  }
  handleClick(path,meta){
      this.props.history.push({pathname:path,params:meta})
      storage.setItem('sidebar',{path,meta})
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount(){
    console.log(this.props,window.location.pathname)
    // this.setState({
    //   defaultSelectedKeys:[this.props.location.pathname],
    //   defaultOpenKeys:[this.props.locations.pathname.replace(/(\/[^\/]*)$/,($1)=>{
    //     return ''
    //   })]
    // })
  }
  render() {
    console.log(this.props,window.location.pathname)
   
    let {menu}=this.props
    let {defaultSelectedKeys,defaultOpenKeys}=this.state;
    return (
      <div>
        <Menu
          defaultSelectedKeys={defaultSelectedKeys}
          defaultOpenKeys={defaultOpenKeys}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
         {menu.map(item=>{
           if(item.children){
            return  <SubMenu
            key={item.path}
            title={
              <span>
                <Icon type="mail" />
                <span>{item.meta.title}</span>
              </span>
            }
          >
            {item.children.map(subItem=>{
              return  <Menu.Item key={subItem.path} 
              onClick={this.handleClick.bind(this,subItem.path,subItem.meta)}
              >{subItem.meta.title}</Menu.Item>
            })}
           
          </SubMenu>
           }else{
             return   <Menu.Item
              key={item.path} 
             onClick={this.handleClick.bind(this,item.path,item.path)}
             >{item.meta.title}</Menu.Item>
           }
         })}
         
        </Menu>
      </div>
    );
  }
}

export default MenuExam;
