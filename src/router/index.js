import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Form from '@/components/form/Form'
import Table from '@/components/table/Table'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:'/',
          component:Form
        },
        {
          path:'/form',
          name:'Form',
          component:Form
        },
        {
          path:'table',
          name:'Table',
          component:Table
        }
      ]
    }
  ],
  mode:'history'
})
