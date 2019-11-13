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
        Insert:(obj)=>dispatch({type: "ClassTeach/Insertobj", params: obj})
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
            }
        ],
        room_id:"",
        visible: false
    }
    render() {
        return (
            <div>
                <Button onClick={this.showModal.bind(this)}>添加班级</Button>
                {
                    this.props.list.length &&
                    <Table columns={this.state.columns} dataSource={this.props.list} rowKey={(record) => record.room_id} />}
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel}
                >
                    <Input name="grade_name" onChange={this.change.bind(this)} placeholder="教室号"/>
                </Modal>
            </div>
        );
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
        })
    }

}

export default ClassTeach;