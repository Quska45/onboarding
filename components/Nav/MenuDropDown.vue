<template>
  <div class="dropdown-box">
    <span class="tag is-black">{{ name }}</span>
    <div :class="`dropdown ${ isActive }`">
      <div class="dropdown-trigger" @click="addActiveClassToMenuByName( name )">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" >
          <span>Dropdown button</span>
          <span class="icon is-small">
          <i class="mdi mdi-arrow-down-bold" aria-hidden="true"></i>
        </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Dropdown item
          </a>
          <a class="dropdown-item">
            Other dropdown item
          </a>
          <a href="#" class="dropdown-item is-active">
            Active dropdown item
          </a>
          <a href="#" class="dropdown-item">
            Other dropdown item
          </a>
          <hr class="dropdown-divider">
          <a href="#" class="dropdown-item">
            With a divider
          </a>
          <MenuDropDownItem></MenuDropDownItem>
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
      initMenus: 'menus/initMenus',
      addActiveClassToMenuByName: 'menus/addActiveClassToMenuByName',
    })
  },
  mounted() {
    this.$store.commit( 'menus/initMenus' )
    // this.initMenus();
  }
}
</script>

<style lang="scss">
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
