import "./application.scss";
import * as services from "./services";

// --------------------------
// PLAYGROUD
services.server
  .emitAction$("login", {username: "foo", password: "bar"})
  .subscribe(user => {
    console.log("We're logged in: " + user);
  }, error => {
    console.error(error);
  });

// --------------------------
// Auth

// --------------------------
//  Components
require("./components/player/player");
require("./components/users/users");
require("./components/chat/chat");

// --------------------------
// Bootstrap
services.socket.connect();
