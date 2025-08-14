import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Request OTP
  @Post('request-otp')
  async requestOtp(@Body() body: { email?: string; phone?: string; roleId: number }) {
    return this.authService.requestOtp(body);
  }

  // Verify OTP and register user
  @Post('verify-register')
  async verifyOtpAndRegister(
    @Body()
    body: {
      name: string;
      email?: string;
      phone?: string;
      password: string;
      roleId: number;
      otp: string;
    },
  ) {
    return this.authService.verifyOtpAndRegister(body);
  }
}