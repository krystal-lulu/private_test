import Vue from 'vue'
import Router from 'vue-router'
import Daily from '@/components/Daily'
import NewsDetail from '@/components/NewsDetail'
import Theme from '@/components/Theme'
import constant from '@/common/constant'

Vue.use(Router)

Router.prototype.goBackPage = function () {
　　this.isBack = true
　　window.history.go(-1)
}


const router = new Router({
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
        back: false,
        keepAlive: true,
      },
    },
    {
      path: '/news-detail:id',
      name: 'news-detail',
      component: NewsDetail,
      meta: {
        title: '详情',
        back: true,
        keepAlive: false
      }
    },
    {
      path: '/theme',
      name: 'theme',
      component: Theme,
      meta: {
        title: '主题',
        back: true,
        keepAlive: false
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else {
      return { x:0, y:0 }
    }
  }
})

router.afterEach((to, from) => {
  window.document.title = to.meta.title || '';
  to.meta.position = 'absolute'

})

router.beforeEach((to, from, next) => {
  next()
})
export default router