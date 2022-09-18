// src/index.js
// 导入组件，组件必须声明 name
import Vue3AudioPlayer from './src/index'
 
// 为组件提供 install 安装方法，供按需引入
Vue3AudioPlayer.install = function (Vue) {
 Vue.component(Vue3AudioPlayer.name, Vue3AudioPlayer)
}
// 默认导出组件
export default Vue3AudioPlayer
