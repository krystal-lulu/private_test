<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <div class="test">
      1<br>
       1<br>
        1<br>

         1<br>
          1<br>
           1<br>
            1<br>

             1<br>
              1<br>
               1<br>
                1<br>
                 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br>
                  1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br>
                   1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br>
                    1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br>
                     1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br>
                      1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br>
                       1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br>
                        1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br> 1<br>
      <router-link to="./theme">theme</router-link>     

      <!-- <button @click="back">back</button> -->
          
      <!-- <router-view/> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      position: 0
    }
  },
  // beforeRouteLeave(to, from, next) {
  //   this.position = $('.test').scrollTop();
  //   next();
  // },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     $('.test').scrollTop(vm.position);
  //   })
  // },
  mounted() {
    console.log('mounted')
    window.addEventListener('scroll', function() {
      console.log('scroll')
    })
  }
  ,
  activated() {
    console.log('activated')
  },
  methods: {
    back() {
      this.$router.goBackPage()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  /*overflow: scroll;*/
}
.test {
  width: 100%;
  height: 300px;
  background-color: red;
  /*overflow-y: auto;*/
}
</style>
