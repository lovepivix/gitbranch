export default {
  // 根据键名列表找到对应元素
  getRightObj (args, data) {
    console.log(args.length)
    let obj = args.reduce((prev, next, index) => {
      console.log(prev, next, prev[next], index)
      if (index > args.length - 2) {
        return prev
      }
      return prev[next]
    }, data)
    // console.log(obj)
    return obj
  },
  // 获取localstorageItem
  getItem (key) {
   
    let data = localStorage.getItem(key)
    console.log(data)
    if(data&&data.indexOf('{')!==-1){
      return JSON.parse(data)
    }else{
      return data
    }
    
  },
  // 设置整个localstorageItem
  setItem (key, val) {
   
    if(typeof val==='string'){
      localStorage.setItem(key, val)
    }else{
      localStorage.setItem(key, JSON.stringify(val))
    }
   
  },
  // 添加浅层数据
  addItem (key, val) {
    let data = JSON.parse(localStorage.getItem(key))

    // data为数组
    if (data instanceof Array === 'array') {
      if (!data.some((item) => {
        return item.name === val.name
      })) {
        data.push(val)
      }
      // data为对象
    } else if (typeof data === 'object') {
      if (!(val.name in data)) {
        data[val.name] = val
      }
    }
    localStorage.setItem(key, JSON.stringify(data))
  },
  // 编辑 val{name:'liang',content:obj}
  editItem (key, val) {
    let data = JSON.parse(localStorage.getItem(key))
    // data为数组
    if (data instanceof Array === 'array') {
      data.forEach((item, index) => {
        if (item.name === val.name) {
          data[index] = val
        }
      })
      // data为对象
    } else if (typeof data === 'object') {
      data[val.name] = val.content
    }
    localStorage.setItem(key, JSON.stringify(data))
  },
  // 传入键名列表 添加到指定对象
  // 数组为下标，对象为属性
  addDeep () {
    let args = arguments
    let data = JSON.parse(localStorage.getItem(args[0]))

    let val = args[args.length - 1]
    let obj = this.getRightObj([...args].slice(1), data)
    //  console.log(obj)
    if (obj instanceof Array === 'array') {
      obj.push(val)
    } else if (typeof obj === 'object') {
      obj[val.date] = val
    }
    // console.log(data)
    localStorage.setItem(args[0], JSON.stringify(data))
  }

}
