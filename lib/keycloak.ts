import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'riddhishala',
  clientId: 'Ridhishala-client',
});

export default keycloak;
