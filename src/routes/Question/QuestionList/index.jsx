import React, { Component } from 'react';
import List from '@/components/List'
import style from './index.less'
import storage from '@/utils/storage.js'
import {connect} from 'dva'
import ScreenBar from '@/components/ScreenBar';
const mapStateToProps=(state)=>({
    questionList:state.question.questionList,
    subjectList:state.question.subjectList,
    questionsType:state.question.questionsType,
    examType:state.question.examType,
  })
  const mapDispatchToProps=(dispatch)=>({
    fetchQuestions(){
        return  dispatch({ type: "question/fetchQuestions"}) 
    },
    fetchSubjects(){
        return  dispatch({ type: "question/fetchSubjects"}) 
    },
    fetchQuestionsType(){
        return  dispatch({ type: "question/fetchQuestionsType"}) 
    },
    fetchExamType(){
        return  dispatch({ type: "question/fetchExamType"}) 
    },
    fetchQBCQuestions(payload){
        return  dispatch({ type: "question/fetchQBCQuestions",payload}) 
    },
  })
  
  @connect( mapStateToProps,mapDispatchToProps)
export class QuestionList extends Component {
    componentDidMount(){
        this.props.fetchQuestions()
        this.props.fetchSubjects()
        this.props.fetchQuestionsType()
        this.props.fetchExamType()
      
    }
    render() {
        console.log(this.props)
        let {questionList,subjectList,questionsType,examType,fetchQBCQuestions}=this.props
        return (
            <div className={style.wrapper}>
                <h1>
                   {this.props.location.params&&this.props.location.params.title||storage.getItem('sidebar')&&storage.getItem('sidebar').meta.title}
                </h1>
                <ScreenBar 
                className={style.screenBar}
                subjectList={subjectList} 
                questionsType={questionsType}
                examType={examType}
                callBack={fetchQBCQuestions}
                ></ScreenBar>
                <List questionList={questionList}></List>
               
            </div>
        );
    }
}

export default QuestionList;
