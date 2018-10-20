import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Form from '@/components/form/Form'

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
      ]
    }
  ],
  mode:'history'
})
