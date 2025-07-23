import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class AuthService {
  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {}

  async login(username: string, password: string) {
    const baseUrl = this.config.get<string>('KEYCLOAK_DOMAIN'); // Ensure this is like "http://localhost:8080"
    const realm = this.config.get<string>('KEYCLOAK_REALM'); // Example: "myrealm"
    const clientId = this.config.get<string>('KEYCLOAK_ADMIN_CLIENT_ID');
    const clientSecret = this.config.get<string>(
      'KEYCLOAK_ADMIN_CLIENT_SECRET',
    );

    if (!baseUrl || !realm || !clientId || !clientSecret) {
      throw new Error(
        'Missing Keycloak configuration in environment variables',
      );
    }

    const tokenUrl = `${baseUrl}/realms/${realm}/protocol/openid-connect/token`;

    const params = new URLSearchParams();
    params.append('client_id', clientId);
    if (clientSecret) {
      params.append('client_secret', clientSecret); // Include only for confidential clients
    }
    params.append('grant_type', 'password');
    params.append('username', username);
    params.append('password', password);

    try {
      const response = await firstValueFrom(
        this.http.post(tokenUrl, params.toString(), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }),
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      const errorMsg =
        (err.response?.data as any)?.error_description || err.message;
      throw new Error(`Keycloak login failed: ${errorMsg}`);
    }
  }
}
