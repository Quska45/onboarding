export const state = () => ({
  userContents: []
});

export const mutations = {
  initUserContents( state, userContents ){
    state.userContents = userContents;
  }
};
