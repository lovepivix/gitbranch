import React, { Component } from 'react';
import { Table, Modal, Button } from "antd";
import { connect } from 'dva'
const initState = (state) => {
    return {
        list: state.LookExamWait.allList
    }
}
const InitSispatch = (dispatch) => {
    return {
        saveList: (obj) => dispatch({ type: "LookExamWait/getAlllist", params: obj })
    }
}
@connect(initState, InitSispatch)
class LookExamWait extends Component {
    state = {
        columns: [
            {
                title: '学生姓名',
                dataIndex: 'student_name',
                key: 'student_name',
            },
            {
                title: '学号',
                dataIndex: 'student_id',
                key: 'student_id',
            },
            {
                title: '操作',
                key: '"bx4ac-o7304f-xl8k2r-7fco1d"',
                render: (text, record) => (
                    <a onClick={this.look.bind(this, record)}>
                        详情
                    </a>
                ),
            },
        ],
        obj: {},
        visible: false
    }
    render() {
        return (
            <div>
                {
                    this.props.list.length &&
                    <Table columns={this.state.columns} dataSource={this.props.list} rowKey={(record) => record.student_id} />}
                <div>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleOk}
                    >
                        <p>起始时间：{this.state.obj.start_time}</p>
                        <p>结束时间：{this.state.obj.end_time}</p>
                        <p>学生姓名：{this.state.obj.student_name}</p>
                    </Modal>
                </div>
            </div>
        );
    }
    
    formatTime(number,format) {  
  
        var formateArr  = ['Y','M','D','h','m','s'];  
        var returnArr   = [];  
        
        var date = new Date(number * 1);  
        returnArr.push(date.getFullYear());  
        returnArr.push(this.formatNumber(date.getMonth() + 1));  
        returnArr.push(this.formatNumber(date.getDate()));  
        
        returnArr.push(this.formatNumber(date.getHours()));  
        returnArr.push(this.formatNumber(date.getMinutes()));  
        returnArr.push(this.formatNumber(date.getSeconds()));  
        
        for (var i in returnArr)  
        {  
          format = format.replace(formateArr[i], returnArr[i]);  
        }  
        return format;  
      } 
      
      //数据转化  
     formatNumber(n) {  
        n = n.toString()  
        return n[1] ? n : '0' + n  
      }  
    componentDidMount() {
        this.props.saveList()
    }
    look(obj) {
        let obj1=Object.assign({},obj)
        obj1.end_time = this.formatTime(obj1.end_time,'Y/M/D h:m:s')
        obj1.start_time = this.formatTime(obj1.start_time,'Y/M/D h:m:s')
        this.setState({
            visible: true,
            obj:obj1
        })
    }
    handleOk = () => {
        this.setState({
            visible: false,
            obj:{}
        });
    }


}

export default LookExamWait;