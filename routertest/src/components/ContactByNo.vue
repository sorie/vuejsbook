<template>
  <div class="">
    <button type="button" class="btn btn_back">
      <router-link to="/">Back</router-link>
    </button>
    <h1>연락처 상세</h1>
    <div>
      <table class="detail table table-bordered">
        <tbody>
          <tr class="active">
            <td>일련번호</td>
            <td>{{contact.no}}</td>
          </tr>
          <tr class="active">
            <td>이름</td>
            <td>{{contact.name}}</td>
          </tr>
          <tr class="active">
            <td>전화</td>
            <td>{{contact.tel}}</td>
          </tr>
          <tr class="active">
            <td>주소</td>
            <td>{{contact.address}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import contactlist from '../ContactList';

export default {
  name : 'contactbyno',
  data : function() {
    return {
      no : 0,
      contacts : contactlist.contacts
    }
  },
  created : function() {
    this.no = this.$route.params.no;
  },
  watch : {
      '$route'(to, from) {
          this.no = to.params.no;
          console.log(from);
      }
  },
  computed : {
    contact : function() {
      var no = this.no;
      var arr = this.contacts.filter(function(item) {
        return item.no == no;
      });
      if(arr.length == 1) return arr[0];
      else return {};
    }
  }  
}
</script>
<style>
  .btn_back {
    float: right;
    background-color: green;
    color: #fff;
  }
  .btn_back a,
  .btn_back a:hover,
  .btn_back a:active {
    color: #fff;
  }
</style>