import User from './User.js'

export default class UserManager {
  /*
  * users : [ User ]
  * */
  constructor( users ) {
    this.users = users;
  };

  static getUserManagerByUsers( users ){
    let _users = users.reduce(( acc, cur )=>{
      acc.push( new User( cur ) );
      return acc;
    }, []);

    return new UserManager( _users );
  };

  addUser( user ){
    this.users.push( user );
  }

  getContentsByUserName( userName ){
    let user = this.users.reduce(( acc, cur )=>{
      cur.name == userName ? acc = cur : null;

      return acc;
    }, null);

    return user.contents;
  }
};
