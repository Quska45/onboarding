import handler from "~/api";

class GlobalExceptionHandler {
  constructor() {

  }

  handleException( callback ){
    try {
      callback();
    } catch( e ) {
      console.log( e );
    }
  }
}

let globalExceptionHandler = new GlobalExceptionHandler();
let handleException = globalExceptionHandler.handleException();
export { handleException };
