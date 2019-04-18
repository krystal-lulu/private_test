import Vue from 'vue'
import Router from 'vue-router'
import Daily from '@/components/Daily'
import NewsDetail from '@/components/NewsDetail'
import Loading from '@/components/Loading'
import constant from '@/common/constant'
import HelloWorld from '@/components/HelloWorld'
import Theme from '@/components/Theme'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

Router.prototype.goBackPage = function () {
　　this.isBack = true;
　　window.history.go(-1);
}

const router = new Router({
  // mode: 'history',
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   },
  //   // 配置Hi对象
  //   {
  //     path: '/Hi',
  //     name: 'Hi',
  //     component: Hi,
  //     //引子路由
  //     children:[
  //       {path:'/',component:Hi},
  //       {path:'Hi1',component:Hi1},
  //       {path:'Hi2',component:Hi2},
  //     ]
  //   }
  // ],
  routes: [
    {
      path: '/',
      redirect: '/daily'
    },
    {
      path: '/daily',
      name: 'daily',
      component: Daily,
      meta: {
        title: '首页',
      },
    },
    {
      path: '/news-detail/:id',
      name: 'news-detail',
      component: NewsDetail,
      meta: {
        title: '详情',
      }
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading,
      meta: {
        title: '加载',
      }
    },
    {
      path: '/hello-world',
      name: 'hello',
      component: HelloWorld,
    },
    {
      path: '/theme',
      name: 'theme',
      component: Theme,
    },
   
  ],
  // vue-router 有 transition的时候不支持
  // scrollBehavior (to, from, savedPosition) {
  //   console.log('savedPosition..', savedPosition)
  //   if(savedPosition) {
  //     console.log('tner')
  //     return savedPosition
  //   } else {
  //     return { x:0, y:0 }
  //   }
  // }
})

router.afterEach((to, from) => {
  window.document.title = to.meta.title || '';
})

router.beforeEach((to, from, next) => {
  // if(to.name === 'news-detail') {
  //   console.log('enter')
  //   next({ path: '/loading' })
  // } else{
    next()
  // }
})
export default router