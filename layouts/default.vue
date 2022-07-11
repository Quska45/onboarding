<template>
  <div id="layout-container">
    <Nav></Nav>
    <nuxt></nuxt>
  </div>
</template>

<script>
import Nav from "../components/Nav/Nav";

export default {
  components: {
    Nav
=======
import User from "../components/js/User";

export default {
  components: {
    Nav,
    Header: User
>>>>>>> Stashed changes
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
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 50px;
    width: calc(100% - 100px)
  }
</style>

