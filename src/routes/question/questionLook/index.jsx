import React, { Component } from "react";
import { Table } from "antd";
import { connect } from "dva";

const columns = [
  {
    title: "题目",
    dataIndex: "title",
    key: "title"
  },
  {
    title: "试题类型",
    dataIndex: "questions_type_text",
    key: "questions_type_id"
  },
  {
    title: "课程名程",
    dataIndex: "subject_text",
    key: "subject_id"
  },
  {
    title: "考试类型",
    dataIndex: "exam_name",
    key: "exam_id"
  }
];

@connect(
  state => {
    return {
      ...state.questionLook
    };
  },
  dispatch => {
    return {
      fetchCondition(data) {
       return dispatch({ type: "questionLook/fetchCondition",params: data});
      }
    };
  }
)
class QuestionType extends Component {
  state = {
    params: {
      questions_type_id: "",
      subject_id: "",
      exam_id: ""
    }
  };

  componentDidMount() {
    this.props.fetchCondition(this.state.params);
  }
  render() {
    const {
      getConditionList
    } = this.props;
    return (
      <div>
        <Table dataSource={getConditionList} rowKey="id" columns={columns} />;
      </div>
    );
  }
}

export default QuestionType;
