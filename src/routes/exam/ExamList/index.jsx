import React, { Component } from "react";
import { Table, Select, Tabs } from "antd";
import { connect } from "dva";
import SuperForm from "@/components/SuperForm";
const { Option } = Select;
const { TabPane } = Tabs;
@connect(
  state => {
    return {
      ...state.ExamList,
      ...state.questionLook
    };
  },
  dispatch => {
    return {
      getExamLists() {
        dispatch({ type: "ExamList/getExamList" });
      },
      fetchCondition() {
        dispatch({ type: "questionLook/initData" });
      }
    };
  }
)
class ExamList extends Component {
  componentDidMount() {
    this.props.getExamLists();
    this.props.fetchCondition();
  }
  cha = (start, end) => {
    let cha = start - end;
    let date = new Date(cha * 1);
    let chatime =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return chatime;
  };
  Time = start => {
    let date = new Date(start * 1);
    let startTimes =
      date.getFullYear() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getDate() +
      "-" +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();

    return startTimes;
  };
  callback = key => {
    console.log(key);
  };
  render() {
    const { getExamList } = this.props;
    const { getExamTypes, getQuestionsTypes } = this.props;
    const columns = [
      {
        title: "试卷信息",
        dataIndex: "",
        key: "title",
        render: (text, value) => (
          <div className="table-operation">
            <p>{value.title}</p>
            <span>
              考试时间：{this.cha(value.start_time, value.end_time)}{" "}
              {value.number}
              道题作弊0分
            </span>
          </div>
        )
      },
      {
        title: "班级",
        dataIndex: "",
        key: "",
        render: (text, value) => (
          <div>
            <p>考试班级</p>
            {value.grade_name.map(item => {
              return <span>{item},</span>;
            })}
          </div>
        )
      },
      {
        title: "创建人",
        dataIndex: "user_name",
        key: ""
      },
      {
        title: "开始时间",
        dataIndex: "",
        key: "",
        render: (text, value) => <p>{this.Time(value.start_time)}</p>
      },
      {
        title: "结束时间",
        dataIndex: "end_time",
        key: "",
        render: (text, value) => <p>{this.Time(value.end_time)}</p>
      },
      {
        title: "操作",
        dataIndex: "",
        key: "",
        render: (text, value) => (
          <a
            onClick={() => {
              this.props.history.push(`/exam/detail/${value.exam_exam_id}`);
            }}
          >
            详情
          </a>
        )
      }
    ];
    return (
      <div>
        <SuperForm
          items={[
            {
              name: "exam_id",
              label: "考试类型",
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
                  {getExamTypes &&
                    getExamTypes.map(item => (
                      <Option key={item["exam_id"]} value={item["exam_id"]}>
                        {item["exam_name"] || item["exam_name"]}
                      </Option>
                    ))}
                </Select>
              )
            },
            {
              name: "questions_type_id",
              label: "课程",
              content: (
                <Select
                  showSearch
                  style={{ width: 150, margin: "0 10px 10px 0" }}
                  placeholder={"课程"}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {getQuestionsTypes &&
                    getQuestionsTypes.map(item => (
                      <Option
                        key={item["questions_type_id"]}
                        value={item["questions_type_id"]}
                      >
                        {item["questions_type_text"] ||
                          item["questions_type_text"]}
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
      <div>
        <Tabs onChange={this.callback} type="card" style={{width:'100%'}}>
          <TabPane tab="全部" key="1">
            <Table dataSource={getExamList} rowKey="id" columns={columns} />;
          </TabPane>
          <TabPane tab="进行中" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="已结束" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        </div>
      </div>
    );
  }
}

export default ExamList;
