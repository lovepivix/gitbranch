import React, { Component } from "react";
import { Input, Select,InputNumber } from "antd";
import styles from "./style.less";
import { connect } from "dva";
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
      }
    };
  }
)
class ExamCreate extends Component {
  state = {
    subject_id: "",
    exam_id: "",
    number:''
  };
  componentDidMount() {
    this.props.fetchCondition();
  }
    onChange=(value)=> {
    this.setState({
        number:value
    })
  }
  render() {
    const { getSubjects, getExamTypes } = this.props;
    return (
      <div className={styles.wrapper}>
        <p>*试卷名称：</p>
        <Input placeholder="Basic usage" />
        <p>*试卷名称：</p>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          onChange={e => {
            this.setState({
              subject_id: e
            });
          }}
        >
          {getSubjects &&
            getSubjects.map(item => {
              return (
                <Option value={item.subject_id} key={item.subject_id}>
                  {item.subject_text}
                </Option>
              );
            })}
        </Select>
        <p>*试卷名称：</p>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          onChange={e => {
            this.setState({
              subject_id: e
            });
          }}
        >
          {getExamTypes &&
            getExamTypes.map(item => {
              return (
                <Option value={item.exam_id} key={item.exam_id}>
                  {item.exam_name}
                </Option>
              );
            })}
        </Select>
        <p>*试卷名称：</p>
        <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange} />
        <p>*试卷名称：</p>
        <Input placeholder="Basic usage" />
      </div>
    );
  }
}

export default ExamCreate;
