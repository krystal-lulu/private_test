<template>
    <div id="app">
      <zhihu-title :style="{'position': position}" class="title"></zhihu-title> 
      <transition :name="transitionName">
        <keep-alive >
          <router-view class="router-view" ></router-view>
        </keep-alive>
      </transition>
    </div>


</template>

<script>
import Title from './components/Title'

export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-right', 
      position: 'fixed',
    }
  },
  components: {
    'zhihu-title': Title
  },
  watch: {
　　　'$route' (to, from) {
　　　　 let isBack = this.$router.isBack; 
　　　　 if(isBack) { 
　　　　　　this.transitionName = 'slide-right'
　　　　 } else {
　　　　　　this.transitionName = 'slide-left'
　　　　 }
　　     this.$router.isBack = false;  
        this.position = 'absolute';
　　　　},
　 },
  mounted() {
     console.log('xx')
     var element = document.querySelector('.router-view');
     element.addEventListener('transitionend', this.transitionHandle, false)
  },
  activated() {
    console.log('active.............')
  },
  methods: {
    transitionHandle() {
      this.position = 'fixed';
    }
  }
};
</script>

<style scoped>
#app {
  color: #2c3e50;
  font-size: 16px;
}
.router-view {
   position: absolute;
   width: 100%;
   transition: transform 0.6s ease;
   margin-top: 50px;
}
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active, .slide-right-enter {
   opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}

</style>
