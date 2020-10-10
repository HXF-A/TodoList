//创建vue根实利
import Vue from 'vue'

import App from './app.vue'
// import { component } from 'vue/types/umd'
new Vue({
    el:'#app',
    components: {
        App
    },
    template: '<App></App>'
})
//挂载vue组件

