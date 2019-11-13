//  rem.js
const baseSize = 100
let outSize = 0
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 375
  // 设置页面根节点字体大小
  document.querySelector('html').style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
  outSize = (baseSize * Math.min(scale, 2))
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.addEventListener('resize', function () {
  if(document.documentElement.clientWidth<996)
  setRem()
})
export default outSize
