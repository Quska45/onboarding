<template>
  <div class="dropdown-box">
    <span class="tag is-black">{{ name }}</span>
    <div :class="`dropdown ${ isActive }`">
      <div class="dropdown-trigger" @click="addActiveClassToUserByName( name )">
        <button class="button user-content-button" aria-haspopup="true" aria-controls="dropdown-menu" >
          <span>{{ activeUserContent }}</span>
          <span class="icon is-small user-content-i">
          <i class="mdi mdi-arrow-down-bold" aria-hidden="true"></i>
        </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
<!--          <hr class="dropdown-divider"> //구분선-->
          <MenuDropDownItem v-for="userContent in userContents" :key="userContent.name" :userContent="userContent.name" :isActive="userContent.isActive" :user="name" :userContentComponentName="userContent.componentName" @getUserContent="getUserContent"></MenuDropDownItem>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import MenuDropDownItem from "./MenuDropDownItem";

export default {
  name: "MenuDropDown",
  components: {
    MenuDropDownItem
  },
  data: function(){
    return {
      userContents: [],
      activeUserContent: ''
    }
  },
  props: {
    name: {
      type: String,
      default: 'Name'
    },
    isActive: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapMutations({
      initUsers: 'users/initUsers',
      addActiveClassToUserByName: 'users/addActiveClassToUserByName',
      removeActiveClassToUsers: 'users/removeActiveClassToUsers'
    }),
    async _initUserContents(){
      let userContents = await this.$axios.$get( '/api/filePath/userContents' + '/' + this.name );
      this.$store.commit( 'userContents/initUserContents', userContents )
      this.userContents = this.$store.state.userContents.userContents;
      this.activeUserContent = 'Select';
    },
    getUserContent( param ){
      this.activeUserContent = param;
      this.$store.commit('userContents/addActiveClassToUserContentByName', param);
    }
  },
  created() {
    this._initUserContents();
  }
}
</script>

<style lang="scss">
  .user-content-i {
    position: absolute;
    right: 10px;
  }
  .user-content-button {
    width: 175px;
  }
  .tag {
    width: 70px;
    height: 38px!important;
    margin-top: 1px;
    margin-left: 5px;
  }
  .dropdown-box {
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .dropdown-menu {
    min-width: 11rem;
    width: 11rem;
  }
</style>
