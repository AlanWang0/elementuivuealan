import Vue from 'vue'
import {Form} from 'element-ui'
import{ Button, Select,FormItem,Input,Message} from 'element-ui'

//注册为全局组件，在哪里都可以使用
Vue.use(Form)
Vue.use(Button)
Vue.use(Select)
Vue.use(FormItem)
Vue.use(Input)

Vue.prototype.$message = Message
