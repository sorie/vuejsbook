<template>
  <div class="modal">
  <div class="form" @keyup.esc="cancelEvent">
    <h3 class="heading">{{headingText}}</h3>
    <div v-if="mode=='update'" class="form-group">
      <label for="">일련번호</label>
      <input type="text" name="no" class="long" disabled v-model="contact.no">
    </div>
    <div class="form-group">
      <label for="">이름</label><input type="text" v-model="contact.name">
    </div>
    <div class="form-group">
      <label for="">전화번호</label><input type="text" v-model="contact.tel">
    </div>
    <div class="form-group">
      <label for="">주소</label><input type="text" v-model="contact.address">
    </div>
    <div class="form-group">
      <div>&nbsp;</div>
      <input type="button" class="btn btn-primary" v-bind:value="btnText" @click="submitEvent()" />
      <input type="button" class="btn btn-primary" value="취소" @click="cancelEvent()" />
    </div>
  </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Constant from '../Constant';

export default {
  name: 'contactform',
  computed : {
    btnText : function() {
      if (this.mode != 'update') return '추 가';
      else return '수 정';
    },
    headingText : function() {
      if (this.mode != 'update') return '새로운 연락처 추가';
      else return '연락처 수정';
    },
    ...mapState(['mode', 'contact'])
  },
  methods : {
    submitEvent() {
      if(this.mode != 'update'){
        this.$store.dispatch(Constant.ADD_CONTACT);
      } else {
        this.$store.dispatch(Constant.UPDATE_CONTACT);
      }
    },
    cancelEvent() {
      this.$store.dispatch(Constant.CANCEL_FORM);
    }
  }
}
</script>
<style scoped>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
  }
  .form {
    background-color: white;
    margin: 100px auto;
    max-width: 400px; min-width: 200px;
    font: 13px "verdana";
    padding: 10px;
  }
  .form div {
    padding: 0; 
    display: block;
    margin: 10px 0 0 0;
  }
  .form label {
    text-align: left;
    margin: 0 0 3px 0;
    padding: 0px;
    display: inline-block;
    font-weight: bold;
    width: 20%;
  }
  .form input:not(.btn) {
    width: 79%;
  }
  .form input, textarea, select {
    box-sizing: border-box;
    border: 1px solid #BEBEBE;
    padding: 7px;
    margin: 0px;
    outline: none;
  }
  .form .long {
    width: 100%;
  }
  .form .button {
    background: #2B798D;
    padding: 8px 15px 8px 15px;
    border: none;
    color: #fff;
  }
  .form .button:hover { background: #4691A4; }
  .form .heading { 
    background: #33A17F; 
    font-weight: 300;
    text-align: left;
    padding: 20px;
    color: #fff;
    margin: 5px 0px 30px 0; 
    padding: 10px;
    min-width: 200px;
    max-width: 400px;
  }

</style>