export const state = () => ({
  userContents: [],
  activeUserContent: ''
});

export const mutations = {
  initUserContents( state, userContents ){
    state.userContents = userContents;
  },
  addActiveClassToUserContentByName( state, name ){
    state.userContents.forEach(( userContent )=>{
      userContent.name == name ? userContent.isActive = 'is-active' : userContent.isActive = '';
    });
  },
  setActiveUserContent( state, contentName ){
    state.activeUserContent = contentName;
  }
};
