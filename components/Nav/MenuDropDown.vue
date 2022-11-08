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
import User from './js/User.js';
import UserManager from './js/UserManager.js';
import userDatas from "../../pages/userContents.json";

let userManager = UserManager.getUserManagerByUsers( userDatas );

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
      addActiveClassToUserByName: 'users/addActiveClassToUserByName',
      setActiveUserContent: 'userContents/setActiveUserContent',
      setActiveUser: 'users/setActiveUser',
      setActiveUserName: 'users/setActiveUserName'
    }),
    initUserContents( paths ){
        this.userContents = userManager.getContentsByUserName( this.name );

        let userName = decodeURIComponent( paths[ 2 ] );
        let userContentName = decodeURIComponent( paths[ 3 ] );
        userContentName = this.userContents.reduce(( acc, cur )=>{
          if( cur.componentName == userContentName ){
            acc = cur.name;
          };
          return acc
        }, '');

        if( this.name == userName ){
          this.activeUserContent = userContentName;
          this.addActiveClassToUserContentByName( userContentName );
          this.setActiveUserContent( userContentName );
          this.setActiveUserName( this.name );
        } else {
          this.activeUserContent = 'Select';
        };
    },
    getUserContent( contentName ){
      this.setActiveUserContent( contentName );
      this.activeUserContent = contentName;
      this.addActiveClassToUserContentByName( contentName )
    },
    addActiveClassToUserContentByName( name ){
      this.userContents.forEach(( userContent )=>{
        userContent.name == name ? userContent.isActive = 'is-active' : userContent.isActive = '';
      });
    }
  },
  created() {
    let paths = this.$route.path.split( '/' );
    this.initUserContents( paths );
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
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .dropdown-menu {
    min-width: 11rem;
    width: 11rem;
  }
</style>
