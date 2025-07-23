import { Module } from '@nestjs/common';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard, KeycloakConnectOptions } from 'nest-keycloak-connect';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8080',
      realm: 'riddhishala',
      clientId: 'Ridhishala-client',
      secret: 'zCcqOcE6YRVSSbNHHBWMDCGAzMeDHxgN',
      logLevels: ['verbose']
    } as KeycloakConnectOptions),
    AdminModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
