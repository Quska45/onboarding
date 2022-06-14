<template>
  <div id="layout-container">
    frommaster 변경함
    <Nav></Nav>
    <nuxt></nuxt>
  </div>
</template>

<script>
import Nav from "../components/Nav/Nav";

export default {
  components: {
    Nav
  }
}
</script>

<style>
  #__layout{
    width: calc(100% - 260px)!important;
    height:100%!important;
  }
  #layout-container{
  }
  html,body,#__nuxt {
    width: 1280px!important;
    height:960px!important;
    overflow: auto!important;
  }
  .layout-index {
    position: absolute;
    top: 0px;
    margin-top: 50px;
    margin-left: 50px;
  }
</style>

