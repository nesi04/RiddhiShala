import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import configuration from 'src/config/configuration';
import { UserApi } from './api/user-api';
import { KeycloakService } from './keycloak/keycloak.service';
import { KeycloakConnectModule, AuthGuard, ResourceGuard, RoleGuard } from 'nest-keycloak-connect';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    KeycloakConnectModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const authServerUrl = configService.get<string>('KEYCLOAK_DOMAIN');
        const realm = configService.get<string>('KEYCLOAK_REALM');
        const clientId = configService.get<string>('KEYCLOAK_ADMIN_CLIENT_ID');
        const secret = configService.get<string>('KEYCLOAK_ADMIN_CLIENT_SECRET');
        if (!authServerUrl || !realm || !clientId || !secret) {
          throw new Error('Missing Keycloak configuration');
        }
        return {
          authServerUrl,
          realm,
          clientId,
          secret,
        };
      },
    }),
  ],
  controllers: [AppController, UserApi],
  providers: [AppService, KeycloakService , {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },
  {
    provide: APP_GUARD,
    useClass: ResourceGuard,
  },
  {
    provide: APP_GUARD,
    useClass: RoleGuard,
  },],
})
export class AppModule {}
