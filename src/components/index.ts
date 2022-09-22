import mEcharts from "./echarts-custom/EchartsCustom.vue";
// 组件列表
const components = [
    mEcharts
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = (Vue: any) => {
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
}

export default {
    install
}