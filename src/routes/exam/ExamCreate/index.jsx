import React, { Component } from "react";
import { Input, Select, InputNumber,DatePicker,Button  } from "antd";
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
      },
      CreateExam(data){
      return  dispatch({ type: "ExamCreate/CreateExam", params: data });
      },
      getExamLists() {
        dispatch({ type: "ExamList/getExamList" });
      }
    };
  }
)
class ExamCreate extends Component {
  state = {
    subject_id: "",
    exam_id: "",
    number: "",
    title:'',
    startValue: null,
    endValue: null
  };
  componentDidMount() {
    this.props.fetchCondition();
  }
  onChange = value => {
    this.setState({
      number: value
    });
  };
  onStartChange = value => {
    this.setState({
        startValue:value
    })
  };

  onEndChange = value => {
    this.setState({
        endValue:value
    })
  };
  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };
  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };
  Value=(e)=>{
      this.setState({
        title:e.target.value 
      })
  }
  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };
  sendMessage=()=>{
      const {subject_id,exam_id,number,title,startValue,endValue}=this.state
     let  start_time=new Date(startValue)*1
      let end_time=new Date(endValue)*1
      let obj={
        subject_id,
        exam_id,
        number,
        title,
        start_time,
        end_time
      }
      this.props.CreateExam(obj).then(res=>{
        console.log(res)
        this.props.history.push('/exam/detail')
        this.props.getExamLists()
      })
  }
  render() {
    const { getSubjects, getExamTypes } = this.props;
    const {title,endValue,startValue}=this.state
    return (
      <div className={styles.wrapper}>
        <p>*试卷名称：</p>
        <Input value={title} onChange={this.Value}/>
        <p>*选择考试类型：</p>
        <Select
          showSearch
          style={{ width: 200 }}
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
        <p>*选择课程：</p>
        <Select
          showSearch
          style={{ width: 200 }}
          onChange={e => {
            this.setState({
                exam_id: e
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
        <p>*设置题量：</p>
        <InputNumber min={1} max={10} defaultValue={4} onChange={this.onChange} />
        <p>*考试时间：</p>
        <DatePicker
          showTime
          disabledDate={this.disabledStartDate}
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="考试时间"
          onChange={this.onStartChange}
        />
        <DatePicker
          showTime
          disabledDate={this.disabledEndDate}
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="结束时间"
          onChange={this.onEndChange}
        />
        <Button type="primary" style={{display:'block',marginTop:'20px'}} onClick={this.sendMessage}>创建试题</Button>
      </div>
    );
  }
}

export default ExamCreate;
