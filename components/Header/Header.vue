<template>
  <div class="box">
    <span class="tag is-info header-tag">{{ getUser }}</span>
    <span class="tag is-info is-light header-tag">{{ getUserContent }}</span>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    getUser: function(){
      return this.$store.state.users.activeUser.name;
    },
    getUserContent: function(){
      return this.$store.state.userContents.activeUserContent;
    }
  },
  watch: {
    getUser: function( user ){
      return this.$store.state.users.activeUser;
    },
    getUserContent: function(){
      return this.$store.state.userContents.activeUserContent;
    }
  }
}
</script>

<style scoped>
  .box {
    position: fixed;
    left: 310px;
    width: calc(100% - 360px);
  }
  .header-tag {
    width: auto;
    display: inline;
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
