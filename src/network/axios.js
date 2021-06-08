import Vue from 'vue'
import axios from 'axios'

//配置请求的根路径
axios.defaults.baseURL='http://192.168.31.159:8888/api/private/v1'

Vue.prototype.$http = axios
