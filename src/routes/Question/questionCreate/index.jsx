import React, { Component } from "react";
import { Input, Select, Button,Modal } from "antd";
import { connect } from "dva";
import storage from '@/utils/storage'
const { confirm } = Modal;
const { TextArea } = Input;
const { Option } = Select;
@connect(
  state => {
    return {
      ...state.questionLook
    };
  },
  dispatch => {
    return {
      fetchCondition(data) {
        dispatch({ type: "questionLook/fetchCondition", params: data });
      },
      getcreateQuestion(data){
        dispatch({ type: "questionCreate/getcreateQuestion", params: data });
      }
    };
  }
)

class QuestioncRreate extends Component {
  state={
      questions_stem:'',
      title:'',
      questions_answer:'',
      subject_id:'',
      questions_type_id:'',
      exam_id:'',
      user_id:storage.get('info').user_id
  }
    componentDidMount(){
        this.props.fetchCondition()
    }
    showConfirm=()=> {
      const {questions_stem,title,questions_answer,subject_id,questions_type_id,exam_id,user_id}=this.state
      const {getcreateQuestion,fetchCondition}=this.props
      let params={
        questions_stem,title,questions_answer,subject_id,questions_type_id,exam_id,user_id
      }
        confirm({
          title: '你确定要添加这道试题吗?',
          content: '真的要添加吗？',
          onOk(e) {
           getcreateQuestion(params)
          },
          onCancel() {},
        });
      }
  render() {
    const { getSubjects, getExamTypes, getQuestionsTypes } = this.props;
    const {questions_stem,title,questions_answer} =this.state
    return (
      <div>
        <p>题目信息</p>
        <p>题干</p>
        <Input placeholder="请输入题目标题，不超过20个字" value={title} onChange={(e)=>{
          this.setState({
              title:e.target.value
          })
        }}/>
        <p>题目主题</p>
        <TextArea rows={4} placeholder="请输入内容。。。" value={questions_stem} onChange={(e)=>{
          this.setState({
            questions_stem:e.target.value
          })
        }}/>
        <p>请选择考试类型：</p>
        <Select showSearch style={{ width: 200 }} placeholder="Select a person"  onChange={(e)=>{
          this.setState({
            subject_id:e
          })
        }}>
          {getSubjects &&
            getSubjects.map(item => {
              return (
                <Option value={item.subject_id} key={item.subject_id}>
                  {item.subject_text}
                </Option>
              );
            })}
        </Select>
        ,<p>请选择课程类型：</p>
        <Select showSearch style={{ width: 200 }} placeholder="Select a person" onChange={(e)=>{
          this.setState({
            questions_type_id:e
          })
        }}>
          {getQuestionsTypes &&
            getQuestionsTypes.map(item => {
              return (
                <Option
                  value={item.questions_type_id}
                  key={item.questions_type_id}
                >
                  {item.questions_type_text}
                </Option>
              );
            })}
        </Select>
        <p>请选择题目类型：</p>
        <Select showSearch style={{ width: 200 }} placeholder="Select a person" onChange={(e)=>{
          this.setState({
            exam_id:e
          })
        }}>
          {getExamTypes &&
            getExamTypes.map(item => {
              return (
                <Option value={item.exam_id} key={item.exam_id}>
                  {item.exam_name}
                </Option>
              );
            })}
        </Select>
        <p>答案信息</p>
        <TextArea rows={4} placeholder="请输入内容。。。" value={questions_answer} onChange={(e)=>{
          this.setState({
              questions_answer:e.target.value
          })
        }}/>
        <Button type="primary" onClick={this.showConfirm}>提交</Button>
      </div>
    );
  }
}

export default QuestioncRreate;
