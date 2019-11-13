import React, { Component } from 'react';
import { connect } from "dva";
@connect(
  state => {
    return {
      ...state.ExamDetail
    };
  },
  dispatch => {
    return {
        getExamDetailLists(id) {
            dispatch({ type: "ExamDetail/getExamDetailList",payload:id });
      }
    };
  }
)
class ExamDetail extends Component {
    componentDidMount(){
        console.log(this.props)
        const id=this.props.match.params.id
        this.props.getExamDetailLists(id)
    }
    render() {
        // const {getExamDetail} =this.props
        // console.log(getExamDetail)
        return (
            <div>
                xiangqimh
            </div>
        );
    }
}

export default ExamDetail;