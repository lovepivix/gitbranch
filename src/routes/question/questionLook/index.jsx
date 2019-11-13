import React, { Component } from "react";
import { Table,Select } from "antd";
import { connect } from "dva";
import SuperForm from '@/components/SuperForm'
const { Option } = Select;

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
      getConditionList,getSubjects, getExamTypes, getQuestionsTypes
    } = this.props;
    return (
      <div>
        <SuperForm
          items={[
            {
              name: "subject_id",
              label: "课程类型",
              //  rules: [{ required: true, message: "Please input your 用户名!" }],
              content: (
                <Select
                  showSearch
                  style={{ width: 150, margin: "0 10px 10px 0" }}
                  placeholder={"课程类型"}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {getSubjects&&getSubjects.map(item => (
                    <Option key={item["subject_id"]} value={item["subject_id"]}>
                       {item["subject_text"]}
                    </Option>
                  ))}
                </Select>
                
              )
            },
            {
              name: "exam_id",
              label: "考试类型",
              //  rules: [{ required: true, message: "Please input your 用户名!" }],
              content: (
                <Select
                  showSearch
                  style={{ width: 150, margin: "0 10px 10px 0" }}
                  placeholder={"考试类型"}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {getExamTypes&&getExamTypes.map(item => (
                    <Option key={item["exam_id"]} value={item["exam_id"]}>
                      {item["exam_name"] || item["exam_name"]}
                    </Option>
                  ))}
                </Select>
                
              )
            },
            {
              name: "questions_type_id",
              label: "试卷类型",
              //  rules: [{ required: true, message: "Please input your 用户名!" }],
              content: (
                <Select
                  showSearch
                  style={{ width: 150, margin: "0 10px 10px 0" }}
                  placeholder={"试卷类型"}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {getQuestionsTypes&&getQuestionsTypes.map(item => (
                    <Option key={item["questions_type_id"]} value={item["questions_type_id"]}>
                      {item["questions_type_text"] || item["questions_type_text"]}
                    </Option>
                  ))}
                </Select>
                
              )
            }
          ]}
          options={{
            span: 6 //栅格布局的列宽
          }}
          callback={this.props.fetchCondition} //表单提交时的回调函数
        ></SuperForm>
        <Table dataSource={getConditionList} rowKey="id" columns={columns} />;
      </div>
    );
  }
}

export default QuestionType;
