<template>
    <a href="#" :class="`dropdown-item ${ isActive }`">
      {{ userContent }}
    </a>
</template>

<script>
export default {
  name: "MenuDropDownItem",
  data: function(){
    return {
    }
  },
  props: {
    userContent: {
      type: String,
      default: 'Name'
    },
    isActive: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>

</style>
