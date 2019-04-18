<template>
    <div id="app">
      <transition :name="transitionName">
          <keep-alive include="Daily">
            <router-view class="router-view"></router-view>
          </keep-alive>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-right', 
    }
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
　　　　},
　 }
};
</script>

<style>
#app {
  font-size: 14px;
}
a:hover {
  text-decoration: none;
}
.router-view {
   width: 100%;
   transition: transform 0.6s ease;
   position: absolute;
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
