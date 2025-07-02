import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NewUser } from './model/new-user';
import { Credential, UserRepresentation } from './dto/user-representation';
import { firstValueFrom } from 'rxjs';
import { URLSearchParams } from 'node:url';
import { UpdateUser } from './model/update-user';
import { RoleRepresentation } from './dto/role-representation';

@Injectable()
export class KeycloakService {
  keycloakAdminUrl: string;
  keycloakLoginUrl: string;
  clientId: string;
  clientSecret: string;
  lifespan: string;
  redirectUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.keycloakAdminUrl =
      this.configService.get<string>('keycloak_admin.baseURL') ?? '';
    this.keycloakLoginUrl =
      this.configService.get<string>('keycloak.login_url') ?? '';
    this.clientId =
      this.configService.get<string>('keycloak_admin.clientId') ?? '';
    this.clientSecret =
      this.configService.get<string>('keycloak_admin.clientSecret') ?? '';
    this.lifespan =
      this.configService.get<string>('keycloak_admin.linkLifeSpan') ?? '';
    this.redirectUrl =
      this.configService.get<string>('keycloak_admin.clientRedirectUrl') ?? '';
  }

  async createUser(newUser: NewUser): Promise<void> {
    try {
      const user: UserRepresentation = new UserRepresentation();

      let token: string = await this.getAdminToken();
      user.lastName = newUser.lastName;
      user.firstName = newUser.firstName;
      user.username = newUser.username;
      user.email = newUser.username;

      const credential: Credential = new Credential();
      credential.type = 'password';
      credential.temporary = false;
      credential.value = newUser.password;

      user.credentials = [credential];
      user.enabled = true;
      user.emailVerified = false;
      await firstValueFrom(
        this.httpService.post(`${this.keycloakAdminUrl}/users`, user, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      );
      await this.sendVerificationEmail(user, token);
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  async getAdminToken(): Promise<string> {
    const formData: URLSearchParams = new URLSearchParams();
    formData.append('client_id', this.clientId);
    formData.append('client_secret', this.clientSecret);
    formData.append('grant_type', 'client_credentials');
    try {
      const response = await firstValueFrom(
        this.httpService.post(this.keycloakLoginUrl, formData.toString(), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }),
      );
      const { access_token } = response.data;
      return access_token;
    } catch (error) {
      console.error('Error fetching admin token:', error);
      throw new Error(`Error fetching admin token: ${error.message}`);
    }
  }

  async sendVerificationEmail(
    user: UserRepresentation,
    token: string,
  ): Promise<void> {
    const users = await this.getUserByUsername(user, token);
    const userId = users[0].id;
    try {
      const params = new URLSearchParams({
        client_id: this.clientId,
        redirect_uri: this.redirectUrl,
      });
      let response = await firstValueFrom(
        this.httpService.put(
          `${this.keycloakAdminUrl}/users/${userId}/send-verify-email`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        ),
      );
    } catch (error) {
      console.error('Error sending verification email:', error);
      throw new Error(`Error sending verification email: ${error.message}`);
    }
  }
  async getUserByUsername(
    user: UserRepresentation,
    token: string,
  ): Promise<UserRepresentation[]> {
    const params = new URLSearchParams({
      first: '0',
      max: '1',
      exact: 'true',
      username: user.username,
    });
    let response = await firstValueFrom(
      this.httpService.get(
        `${this.keycloakAdminUrl}/users?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ),
    );
    return response.data;
  }
 async getRoleByName(name: string, token: string): Promise<RoleRepresentation> {
  const { data } = await firstValueFrom(
    this.httpService.get(`${this.keycloakAdminUrl}/roles/${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  );

  return data; // this will be a single RoleRepresentation object
}


async assignUserRole(userId: string, roleName: string): Promise<void> {
  const token = await this.getAdminToken();
  const role = await this.getRoleByName(roleName, token);

  const roles = [role]; // only one role

  try {
    await firstValueFrom(
      this.httpService.post(
        `${this.keycloakAdminUrl}/users/${userId}/role-mappings/realm`,
        roles,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      ),
    );
  } catch (error) {
    console.error('Error response data:', error?.response?.data);
    throw new Error(`Error assigning role: ${error.message}`);
  }
}
async removeUserRole(userId: string, roleName: string): Promise<void> {
  const token = await this.getAdminToken();
  const role = await this.getRoleByName(roleName, token);

  const roles = [role]; // only one role

  try {
    await firstValueFrom(
      this.httpService.delete(
        `${this.keycloakAdminUrl}/users/${userId}/role-mappings/realm`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          data: roles, // use 'data' for DELETE requests
        },
      ),
    );
  } catch (error) {
    console.error('Error response data:', error?.response?.data);
    throw new Error(`Error assigning role: ${error.message}`);
  }
}


  async updateUser(newUser: UpdateUser, userId: string): Promise<void> {
    try {
      let token: string = await this.getAdminToken();

      await firstValueFrom(
        this.httpService.put(
          `${this.keycloakAdminUrl}/users/${userId}`,
          newUser,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        ),
      );
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error(`Error creating user: ${error.message}`);
    }
  }
}
