<template>
  <div>
    <div class="header">
      <h1>(주)OpenSG</h1>
      <nav>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contacts">Contacts</router-link></li>
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
import VueRouter from 'vue-router'

const router = new VueRouter({
  routes : [
    { path:'/', component: Home },
    { path:'/home', component: Home },
    { path:'/about', component: About },
    { path:'/contacts', component: Contacts,
      children : [
        { path : ':no', component: ContactByNo }
    ] },
  ]
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
