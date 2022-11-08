import User from './User.js'
import userDatas from "@/pages/userContents.json";

export default class UserManager {
  constructor( users ) {
    this.users = users;
  };

  static getUserManagerByUsers( users ){
    let _users = userDatas.reduce(( acc, cur )=>{
      acc.push( new User( cur ) );
      return acc;
    }, []);

    return new UserManager( _users );
  }

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
