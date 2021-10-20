import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-amjxwgoc.us.auth0.com"
    clientId="xLakae9McS0qwqZmivIAiw55ciJE4AJF"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);