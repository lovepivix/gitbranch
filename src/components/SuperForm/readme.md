### 后台管理系统
```jsx
  <SuperForm 
  items={
      [{
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
            {subjectList.map(item => (
              <Option key={item["subject_id"]} value={item["subject_id"]}>
                {item["subject_text"] || item["subject_name"]}
              </Option>
            ))}
          </Select>
        ),
      }]
  } 
  options={{
        span:6,//栅格布局的列宽
    }}
  callback={fetchQBCQuestions} //表单提交时的回调函数

    ></SuperForm>
```
