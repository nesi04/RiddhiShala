import { Body, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { KeycloakService } from "src/keycloak/keycloak.service";
import { NewUser } from "src/keycloak/model/new-user";
import { UpdateUser } from "src/keycloak/model/update-user";

@Controller('user')
@ApiBearerAuth()
export class UserApi {
    constructor(private readonly keycloakService: KeycloakService) {

    }
    @Post()
    async createNewUser(@Body() newUser : NewUser): Promise<void> {
        await this.keycloakService.createUser(newUser);

    }
    @Put('/:id')
    async updateUser(@Param('id') userId:string ,  @Body() updateUser : UpdateUser): Promise<void> {
        await this.keycloakService.updateUser(updateUser , userId);

    }
    @Put('/:id/assign-role/:role')
    async assignRole(
        @Param('id') userId:string,
        @Param('role') role: string,
        ): Promise<void> {
        await this.keycloakService.assignUserRole(userId, role);
    }
    @Delete('/:id/assign-role/:role')
    async removeUserRole(
        @Param('id') userId:string,
        @Param('role') role: string,
        ): Promise<void> {
        await this.keycloakService.removeUserRole(userId, role);
    }
}