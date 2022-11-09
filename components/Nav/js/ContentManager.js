import Content from './Content.js';

export default class ContentManager {
  constructor() {
    this.contents = [];
  }

  /*
  * contents : [ Content ]
  * */
  setContent( contents ){
    this.contents = contents;
  }

  /*
  * content : Content
  * */
  addContent( content ) {
    this.contents.push(content);
  }

  getContentByComponentName( componentName ){
    const found = this.contents.find( cur => cur.componentName == componentName );
    return found ? found : {};
  }

  /*
  * contents : [ {} ]
  * */
  static getContentManagerByContents( contents ){
    let contentManager = new ContentManager();
    let _contents = contents.reduce(( acc, cur )=>{
      acc.push( new Content( cur ) );
      return acc;
    }, []);

    contentManager.setContent( _contents );

    return contentManager;
  }
}
