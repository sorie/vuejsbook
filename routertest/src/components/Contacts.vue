<template>
  <div>
   <h1>연락처</h1>
   <div class="wrapper">
     <div class="box" v-for="c in contacts" :key="c.no">
       <router-link :to="'/contacts/'+ c.no">{{c.name}}</router-link>
     </div>
   </div>
   <router-view></router-view>
  </div>
</template>

<script>
import contactlist from '../ContactList'
export default {
  name: 'Contacts',
  data : function() {
    return {
      contacts : contactlist.contacts
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.wrapper {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.box {
  flex: 1 1 33%;
  box-sizing: border-box;
  background-color: green;
  border: 0.1px solid #ccffcc;
  text-align: center;
}
.box a {
  display: block;
  padding: 1em;
  color: #fff;
}
</style>
