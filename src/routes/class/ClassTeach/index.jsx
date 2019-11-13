import React, { Component } from 'react';
import { Table, Modal, Button, Input } from "antd";
import { connect } from 'dva'
const initState = (state) => {
    return {
        list: state.ClassTeach.allList
    }
}
const InitSispatch = (dispatch) => {
    return {
        saveList: (obj) => dispatch({ type: "ClassTeach/getAlllist", params: obj }),
        Insert:(obj)=>dispatch({type: "ClassTeach/Insertobj", params: obj}),
        delete:(obj)=>dispatch({type: "ClassTeach/deleteobj", params: obj}),
    }
}
@connect(initState, InitSispatch)
class ClassTeach extends Component {
    state = {
        columns: [
            {
                title: '教室号',
                dataIndex: 'room_text',
                key: 'room_text',
            },
            {
                title: '教室排序',
                dataIndex: 'room_id',
                key: 'room_id',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <a onClick={this.removeobj.bind(this,record)}>Delete</a>
                ),
              },
        ],
        room_id:"",
        visible: false,
        removevisible:false,
        obj:{}
    }
    render() {
        return (
            <div>
                <Button onClick={this.showModal.bind(this)}>添加班级</Button>
                {
                    this.props.list.length &&
                    <Table columns={this.state.columns} dataSource={this.props.list} rowKey={(record) => record.room_id} />}
                <Modal
                    title="添加教室"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel}
                >
                    <Input name="grade_name" onChange={this.change.bind(this)} placeholder="教室号"/>
                </Modal>
                <Modal
                    title="删除教室"
                    visible={this.state.removevisible}
                    onOk={this.removeOk.bind(this)}
                    onCancel={this.handleCancel}
                >
                    <p>确认删除？？</p>
                </Modal>
            </div>
        );
    }
    removeobj(obj){
      this.setState({obj,removevisible:true})
    }
    removeOk(){
        this.props.delete(this.state.obj)
        this.setState({obj:{},removevisible:false})
    }
    change(e){
       this.setState({
        room_id:e.target.value,
       })
    }
    componentDidMount() {
        this.props.saveList()
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = e => {
        this.props.Insert({room_text:this.state.room_id})
        this.setState({
            visible: false,
        });
    }
    handleCancel = e => {
        this.setState({
            visible: false,
            removevisible:false
        })
    }

}

export default ClassTeach;