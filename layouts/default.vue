<template>
  <div id="layout-container">
    <Nav></Nav>
    <Header></Header>
    <nuxt></nuxt>
  </div>
</template>

<script>
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";

export default {
  components: {
    Nav,
    Header
  }
}
</script>

<style>
  #__layout{
    /*width: calc(100% - 260px)!important;*/
    /*height:100%!important;*/
  }
  #layout-container{
  }
  html,body {
    margin: 0;
    padding: 0;
  }
  .layout-index {
    position: absolute;
    top: 0px;
    margin-top: 100px;
    margin-left: 150px;
    margin-right: 150px;
    width: calc(100% - 300px);
  }
</style>

