let activeTitle = {};

export const state = () => ({
  titles: [
    {
      name: '변광진',
      isActive: ''
    },
    {
      name: '변광진1',
      isActive: ''
    },
  ]
})

export const mutations = {
  inactiveMenus(){
    this.state.titles.forEach(function( title ){
      title.isActive = ''
    });
  },
  activeMenuByName( state, name ){
    console.log(arguments)
    let title = state.titles.reduce(function( acc, cur ){
      if( cur.name == name ){
        acc = cur;
      }
      return acc;
    }, {});

    if( activeTitle.name == name ){
      activeTitle.isActive = '';
      activeTitle = {};
      return false;
    };

    if( !activeTitle.name ){
      activeTitle.isActive = '';
      activeTitle = title;
      title.isActive = 'is-active';
      return true;
    };

    if( activeTitle.name != name ){
      activeTitle.isActive = '';
      activeTitle = title;
      title.isActive = 'is-active';
      return true;
    };
  }
}
