<template>
  <div>
   <h1>연락처</h1>
   <div class="wrapper">
     <div class="box" v-for="c in contacts" :key="c.no">
       <span @click="navigate(c.no)" style="cursor:pointer" class="btn_name">{{c.name}}</span>
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
  },
  methods: {
    navigate(no) {
      if (confirm("상세 정보를 보시겠습니까?")) {
        this.$router.push({name:'contactbyno', params: {no: no}}, function() {
          console.log("/contacts/"+no+" 로 이동 완료~")
        })
      }
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
.box .btn_name {
  display: block;
  padding: 1em;
  color: #fff;
}
</style>
