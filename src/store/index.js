import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import login from './login'
import getters from './getters'
import axios from 'axios'
import ElementUI from 'element-ui';

export default new Vuex.Store({
    getters,
state:{
    ElementUI,
    axios,
    returnMessage:"",
    app_view:sessionStorage.getItem("app_view")||'login',
},
modules:{
'login':login,
},

})