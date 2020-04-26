import "./application.scss";
import * as services from "./services";

// --------------------------
// PLAYGROUD
services.server.on$("test")
  .map(d => d + " tits")
  .subscribe(item => {
    console.log(`Got ${item} from server.`)
  });

// --------------------------
// Auth

// --------------------------
//  Components

// --------------------------
// Bootstrap
services.socket.connect();
