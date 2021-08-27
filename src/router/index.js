import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import FirstComponent from "../components/ParentComponent";
import MyVue from "../components/MyVue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/first', name: 'FirstComponent', component: FirstComponent },
    { path: '/my', name: 'MyVue', component: MyVue }
  ]
})
