<template>
  <div id="app">
    <layout>
      <h1 slot="header">헤더 영역</h1>

      <div slot="sidebar">
        <ul class="menu">
          <li v-for="sidebar in sidebars" :key="sidebar.menu">
            <a v-bind:href="sidebar.link">{{sidebar.menu}}</a>
          </li>
        </ul>
      </div>

      <div slot="content">
        <h2>컨텐트 영역</h2>
        <p>김수한무 거북이와 두루미 ... (생략)</p>
        <p>김수한무 거북이와 두루미 ... (생략)</p>
        <p>김수한무 거북이와 두루미 ... (생략)</p>
        <p>김수한무 거북이와 두루미 ... (생략)</p>
      </div>
      
      <p slot="footer">Footer text</p>
    </layout>
  </div>
  <!-- NamedSlot.vue에 작성한 레이아웃 안의 슬롯에 콘텐트가 배치된 것을 확인할 수 있다. -->
  <!-- AppNamed.vue 와 같은 컴포넌트가 여러 개가 작성되어 있고, 레이아웃을 변경하는 상황을 가정했을때
  NamedSlot.vue 컴포넌트에서만 전체 레이아웃을 변경하면 된다. AppNamed.vue에서는 아무런 작업을 하지 않아도 된다.  -->
</template>

<script>
import Layout from './components/NamedSlot.vue'

export default {
  data() {
    return {
      sidebars : [
        {menu: "Home", link : "#"},
        {menu: "About", link : "#"},
        {menu: "Contact", link : "#"},
        {menu: "Vue.js", link : "#"}
      ]
    }
  },
  components : {Layout}
}
</script>

<style scoped>
  ul.menu {
    position: relative;
    padding: 5px;
    list-style: none;
    font-style: italic;
  }
  ul.menu a {
    text-decoration:none;
  }
</style>