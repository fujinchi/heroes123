// 导入模块   CommonJS模块化语法
// 导出模块用 export
// const Vue = require('vue');

// 导入模块   ES6模块化语法（推荐） 
import Vue from 'vue'
// 导入 App.vue 组件
import App from './App.vue'

// 创建 Vue
new Vue({
  // index.html中的 #app
  el: '#app',
  // 通过 render 方法将 App 根组件渲染到 #app 位置
  render: h => h(App)
})
