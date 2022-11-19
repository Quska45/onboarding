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
import UserManager from './js/UserManager.js';
import Content from "@/components/Nav/js/Content";
import ContentManager from "@/components/Nav/js/ContentManager";
import userDatas from "../../pages/userContents.json";

// let userManager = UserManager.getUserManagerByUsers( userDatas );
// let contentManager = null;

export default {
  name: "MenuDropDown",
  components: {
    MenuDropDownItem
  },
  data: function(){
    const _this = this;
    return {
      userContents: [],
      activeUserContent: '',
      userManager: UserManager.getUserManagerByUsers( userDatas ),
      contentManager: (function(){
        const found = userDatas.find( cur =>cur.name == _this.name );
        return ContentManager.getContentManagerByContents( found.componentNames )
      })()
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
      setActiveUserName: 'users/setActiveUserName'
    }),
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
    const paths = this.$route.path.split( '/' );
    const userName = decodeURIComponent( paths[ 2 ] );
    let contentName = decodeURIComponent( paths[ 3 ] );
    const content = this.contentManager.getContentByComponentName( contentName );

    contentName = content.name;
    this.userContents = this.contentManager.contents;

    if( this.name == userName ){
      this.activeUserContent = contentName;
      this.addActiveClassToUserContentByName( contentName );
      this.setActiveUserName( userName );
      this.setActiveUserContent( contentName );
    } else {
      this.activeUserContent = 'Select';
    };
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
