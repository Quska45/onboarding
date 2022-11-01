<template>
  <div id="layout-container">
    <Nav></Nav>
    <nuxt></nuxt>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer"

export default {
  components: {
    Nav,
    Footer
  }
}

window.onerror = function( message, source, lineno, colno, error ){
  console.log( message );
}
</script>

<style>
  html,body {
    margin: 0;
    padding: 0;
  }
  .layout-index {
    position: absolute;
    top: 0px;
    /*margin-top: 100px;*/
    margin-left: 310px;
    margin-right: 50px;
    width: calc(100% - 360px);
    padding-top: 100px;
  }
</style>

