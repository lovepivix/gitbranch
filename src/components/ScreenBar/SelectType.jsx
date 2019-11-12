import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

class SelectType extends Component {
  onChange(value) {
    console.log(`selected ${value}`);
    this.props.changeState(this.props.title+'_id',value)
  }

  onBlur() {
    console.log("blur");
  }

  onFocus() {
    console.log("focus");
  }

  onSearch(val) {
    console.log("search:", val);
  }
  render() {
    console.log(this.props);
    let { dataList, type,title } = this.props;
    return (
      <Select
        showSearch
        style={{ width: 150 ,margin:"0 10px 10px 0"}}
        placeholder={type}
        optionFilterProp="children"
        onChange={this.onChange.bind(this)}
        onFocus={this.onFocus.bind(this)}
        onBlur={this.onBlur.bind(this)}
        onSearch={this.onSearch.bind(this)}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {dataList.map(item => {
          return (
            <Option key={item[title+'_id']} value={item[title+'_id']}>
              {item[title+'_text']||item[title+'_name']}
            </Option>
          );
        })}
      </Select>
    );
  }
}

export default SelectType;
