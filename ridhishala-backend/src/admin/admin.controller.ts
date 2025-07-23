import { Controller, Get } from '@nestjs/common';
import { Roles } from 'nest-keycloak-connect';

@Controller('admin')
export class AdminController {
  @Get()
  @Roles('super_user') // ✅ Just pass the role as a string
  getSuperAdminOnly() {
    return { message: 'You are a SuperAdmin!' };
  }
}
