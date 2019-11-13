
const stroage = {
  get: key => {
    let value = window.localStorage.getItem(key);
    if (value !== null) {
      if (value.indexOf("{") === 0 || value.indexOf("[") === 0) {
        value = JSON.parse(value);
      }
    }
    return value;
  },
  set: (key, value) => {
    let newVal = value;
    if (typeof newVal === "object") {
      newVal = JSON.stringify(newVal);
    }
    window.localStorage.setItem(key, newVal);
  }
};
export default stroage;

