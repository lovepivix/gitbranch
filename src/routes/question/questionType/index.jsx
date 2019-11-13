import React, { Component } from "react";
import { Table, Button, Modal, Input, Popconfirm } from "antd";
import { connect } from "dva";

@connect(
  state => {
    return {
      ...state.questionType
    };
  },
  dispatch => {
    return {
      getQuestionsTypes(data) {
        dispatch({ type: "questionType/getQuestionsTypes", params: data });
      },
      insertType(data) {
        dispatch({ type: "questionType/insertType", payload: data });
      },
      deleteType(id){
        dispatch({ type: "questionType/deleteType", payload: id });
      }
    };
  }
)
class QuestionType extends Component {
  state = {
    visible: false,
    params: {
      text: "",
      sort: 0
    },
    num: 70,
    editing: false,
    dataSource: [
      {
        key: "0",
        name: "Edward King 0",
        age: "32",
        address: "London, Park Lane no. 0"
      },
      {
        key: "1",
        name: "Edward King 1",
        age: "32",
        address: "London, Park Lane no. 1"
      }
    ],
  
  };
  componentDidMount() {
    this.props.getQuestionsTypes();
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleDelete = key => {
    this.props.deleteType(key)
    this.props.getQuestionsTypes();
  };
  hideModal = e => {
    let { num } = this.state;
    this.props.insertType(this.state.params);
    this.props.getQuestionsTypes();
    num++;
    this.setState({
      visible: false,
      num
    });
  };
  render() {
    const { getQuestionsType } = this.props;
    console.log(getQuestionsType)
    let { num } = this.state;
    const   columns=[
      {
        title: "类型ID",
        dataIndex: "questions_type_id",
        key: "questions_type_id"
      },
      {
        title: "类型名称",
        dataIndex: "questions_type_text",
        key: "questions_type_text"
      },
      {
        title: "operation",
        dataIndex: "operation",
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record)}
            >
              <a>Delete</a>
            </Popconfirm>
          ) : null
      }
    ]
    return (
      <div> 
        <Button type="primary" onClick={this.showModal}>
          +添加类型
        </Button>
        <Modal
          title="创建新类型"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <Input
            placeholder="Basic usage"
            value={this.state.params.text}
            onChange={e =>
              this.setState({ params: { text: e.target.value, sort: num } })
            }
          />
        </Modal>
        <Table dataSource={getQuestionsType} rowKey="id" columns={columns} />;
      </div>
    );
  }
}

export default QuestionType;
