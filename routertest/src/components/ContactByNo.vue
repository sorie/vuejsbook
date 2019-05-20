<template>
  <div class="">
    <button type="button" class="btn_back">
      <router-link :to="''+ backtothe" >Back</router-link>
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
  props : ['no'],
  data : function() {
    return {
      contacts : contactlist.contacts,
      backtothe : ''
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
    border: 1px solid transparent;
    box-shadow: none;
    border-radius: 2px;
    color: #fff;
  }
  .btn_back a,
  .btn_back a:hover,
  .btn_back a:active {
    color: #fff;
  }
</style>