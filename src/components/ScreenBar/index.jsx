import React, { Component } from "react";
import SelectType from "./SelectType";
import { Button } from "antd";

class ScreenBar extends Component {
  state = { questions_id:'', questions_type_id:'', subject_id:'', exam_id:'', };
  changeState(type,data){
      this.setState({
          [type]:data
      })
  }
  render() {
    console.log(this.props);
    let { subjectList, questionsType, examType, callBack } = this.props;
    return (
      <>
        <SelectType
          dataList={subjectList}
          type={"课程类型"}
          title="subject"
          changeState={this.changeState.bind(this)}
        ></SelectType>
        <SelectType
          dataList={questionsType}
          type={"题目类型"}
          title="questions_type"
          changeState={this.changeState.bind(this)}
        ></SelectType>
        <SelectType
          dataList={examType}
          type={"考试类型"}
          title="exam"
          changeState={this.changeState.bind(this)}
        ></SelectType>
        <Button
          type="primary"
          icon="search"
          onClick={e => {
            callBack({...this.state});
          }}
        >
          搜索
        </Button>
      </>
    );
  }
}

export default ScreenBar;
