import React, { Component,cloneElement } from "react";
import { Form, Icon, Input, Button, Row, Col } from "antd";
interface Iprops{
  form:any,
  options:any,
  callback:any,
  items:any,
 
}

@Form.create()
class SuperForm extends Component<Iprops> {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        this.props.callback(values)
      }
    });
  };
  handleReset=()=>{
 
    this.props.form.resetFields()
  }
  get renderFormItem() {
    let { items, options} = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Row gutter={[16, 8]}>
        {items.map(item => {
          return (
            <Col span={options.span} key={item.name}>
              <Form.Item key={item.name}>
                
                {getFieldDecorator(item.name, {
                  rules: item.rules
                })(
                  cloneElement(item.content, {
                    ...item.props,
                    key: item.name
                  })
                )}
               
              </Form.Item>
            </Col>
          );
        })}
        <Col span={options.span}>
          <Form.Item>
            <Button style={{margin:'0 10px 0 0'}} type="primary" htmlType="submit" icon="search">
              搜索
            </Button>
            <Button type="primary"style={{margin:'0 10px 0 0'}}  onClick={this.handleReset}>
              重置
            </Button>
          </Form.Item>
        </Col>
      </Row>
    );
  }
  render() {
    // console.log(this.props.loading)
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        {this.renderFormItem}
      </Form>
    );
  }
}
export default SuperForm;
