<template>
  <div class="box">
    <span class="tag is-info header-tag">{{ user }}</span>
    <span class="tag is-info is-light header-tag">{{ userContent }}</span>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      user: this.$store.state.users.activeUser.name,
      userContent: this.$store.state.userContents.activeUserContent
    }
  }
}
</script>

<style scoped>
  .box {
    position: fixed;
    left: 310px;
    width: calc(100% - 360px);
    top: 0px;
  }
  .header-tag {
    width: auto;
    display: inline;
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
