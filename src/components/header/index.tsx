import React, { Component } from "react";
import { Select,Form,Button,Layout } from "antd";
import { connect } from "dva";
const { Option } = Select;
const { Header } = Layout;
interface Iprops{
  form:any,
  fetchCondition:any,
  getSubjects:any,
  getExamTypes:any,
  getQuestionsTypes:any
}
@connect(state => {
    return {
      ...state.questionLook
    };
  },  dispatch => {
    return {
      fetchCondition(data) {
         dispatch({ type: "questionLook/fetchCondition", params: data });
      }
    };
  })
class Headers extends Component<Iprops> {
    handleSubmit = e => {
        e.preventDefault();
        const value = this.props.form.getFieldsValue();
        this.props.fetchCondition(value);
      };
  render() {
    const {
        getSubjects,
        getExamTypes,
        getQuestionsTypes
      } = this.props;
      const { getFieldDecorator } = this.props.form;
    return (
        <Header style={{ background: "#fff", padding: 0 }}>
              <Form
                onSubmit={this.handleSubmit}
                className="login-form"
                style={{ display: "flex",justifyContent:'space-around' }}
              >
                <Form.Item>
                  {getFieldDecorator("subject_id")(
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="课程"
                    >
                      {getSubjects &&
                        getSubjects.map(item => {
                          return (
                            <Option
                              value={item.subject_id}
                              key={item.subject_id}
                            >
                              {item.subject_text}
                            </Option>
                          );
                        })}
                    </Select>
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("questions_type_id")(
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="试题类型"
                    >
                      {getQuestionsTypes &&
                        getQuestionsTypes.map(item => {
                          return (
                            <Option value={item.questions_type_id} key={item.questions_type_id}>
                              {item.questions_type_text}
                            </Option>
                          );
                        })}
                    </Select>
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("exam_id")(
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="考试类型"
                    >
                      {getExamTypes &&
                        getExamTypes.map(item => {
                          return (
                            <Option
                              value={item.exam_id}
                              key={item.exam_id}
                            >
                              {item.exam_name}
                            </Option>
                          );
                        })}
                    </Select>
                  )}
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    搜索
                  </Button>
                </Form.Item>
              </Form>
            </Header>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
    Headers
  );
export default WrappedNormalLoginForm;
