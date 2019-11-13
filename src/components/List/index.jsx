import React, { Component } from "react";
import { Table, Divider, Tag } from 'antd';

const { Column,  } = Table;
const columns = [
    {
      title: 'exam_name',
      dataIndex: 'exam_name',
      key: 'exam_name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'subject_text',
      dataIndex: 'subject_text',
      key: 'subject_text',
    },
    {
      title: 'user_name',
      dataIndex: 'user_name',
      key: 'user_name',
    },
    
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => {
         return <span>
            <Divider type="vertical" />
            <a >删除</a>
          </span>
      },
    },
  ];
  
class List extends Component {

  render() {
    console.log(this.props)
    return (
        <Table columns={columns} dataSource={this.props.questionList} />
    );
  }
}

export default List;
