<template>
  <div>
    <div class="header">
      <h1>(주)OpenSG</h1>
      <nav>
        <ul>
          <li><router-link v-bind:to="{name:'home'}">Home</router-link></li>
          <li><router-link v-bind:to="{name:'about'}">About</router-link></li>
          <li><router-link v-bind:to="{name:'contacts'}">Contacts</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contacts from './components/Contacts.vue'
import ContactByNo from './components/ContactByNo.vue'
import NotFound from './components/NotFound.vue';
import VueRouter from 'vue-router'

function connectQueryToProp(route) {
  return { no : route.query.no, path: route.path }
}

const router = new VueRouter({
  mode : "history", //해시태그제거
  routes : [
    { path:'/', component: Home },
    { path:'/home', name:'home', component: Home },
    { path:'/about', name:'about', component: About },
    { 
      path:'/contacts', name:'contacts', component: Contacts,
      children : [
        { 
          path : ':no', name:'contactbyno', component: ContactByNo, props: true
          // ,beforeEnter : (to,from,next)=>{
          //   console.log("@@beforeEnter:" + from.path + "==>"+to.path)
          //   if(from.path.startsWith("/contacts"))
          //     next()//다음훅으로진행됨.
          //   else
          //     next("/home")
          // }
        }
      ] 
    },
    { path: '*', component: NotFound }
  ]
})

router.beforeEach((to, from, next) => {
  console.log("** beforeEach!!!")
  next();
})
router.afterEach((to, from) => {
  console.log("** afterEach!!")
})

export default {
  name : 'app',
  router
}
</script>

<style>
.header { background-color: #ccc; padding: 10px 5px 5px 5px; }
.headerText { padding: 0px 20px 0px 20px; } 
.header::after { content: ''; display: table; clear: both; }
ul { float: right; list-style-type: none; margin: 0; padding: 0;
    overflow: hidden; background-color: pink;  }
li { float: left; }
li a { display: block; color: red; text-align: center;
    padding: 14px 16px; text-decoration: none;  }
li a:hover { background-color: #fff; color:black; }
.container {
  margin: 2em 0em 2em 0em;
}
h1 {
  margin-top: 1em !important;
  margin-bottom: 1em !important;
}
</style>
