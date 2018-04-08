import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import  GoodsList from "@/views/GoodsList"
import title from '@/views/title'
import image from '@/views/image'
import Cart from '@/views/Cart'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      components:{
        default:GoodsList,
        title: title,
        image: image,
      },
      children:[
        {
          path:'title',
          name:'title',
          component:title,
        },
        {
          path: 'img',
          name: 'img',
          component: image,
        }
      ]
    },
    {
      path:'/cart/:user',
      name:'cart',
      component: Cart,
    }
  ]
})
