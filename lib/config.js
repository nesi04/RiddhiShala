// lib/keycloak.js
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080", // Change this to your Keycloak server URL
  realm: "Riddhishala",          // Replace with your realm name
  clientId: "your-client-id",   // Replace with your Keycloak client ID
});

export default keycloak;
