import React, { Component } from "react";
import Headers from "@/components/header";
import { Table } from "antd";
import { connect } from "dva";
@connect(
  state => {
    return {
      ...state.ExamList
    };
  },
  dispatch => {
    return {
      getExamLists() {
        dispatch({ type: "ExamList/getExamList" });
      }
    };
  }
)
class ExamList extends Component {
  componentDidMount() {
    this.props.getExamLists();
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
  render() {
    const { getExamList } = this.props;
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
        <Headers />
        <Table dataSource={getExamList} rowKey="id" columns={columns} />;
      </div>
    );
  }
}

export default ExamList;
