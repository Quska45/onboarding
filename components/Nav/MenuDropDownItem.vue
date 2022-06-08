<template>
  <div @click="removeActiveClassToUsers(), getUserContent()">
    <nuxt-link :class="`dropdown-item ${ isActive }`" :to="`/contents/${this.user}/${this.userContentComponentName}`">
      {{ userContent }}
    </nuxt-link>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "MenuDropDownItem",
  data: function(){
    return {
    }
  },
  methods: {
    ...mapMutations({
      removeActiveClassToUsers: 'users/removeActiveClassToUsers'
    }),
    getUserContent() {
      this.$emit('getUserContent', this.userContent)
    }
  },
  props: {
    user: {
      type: String,
      default: 'Name'
    },
    userContent: {
      type: String,
      default: 'Name'
    },
    isActive: {
      type: String,
      default: ''
    },
    userContentComponentName: {
      type: String,
      default: 'Name'
    }
  },
}
</script>

<style scoped>

</style>
