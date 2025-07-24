import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'admin@bpitindia.edu.in', required: false })
  @IsOptional()
  @IsEmail({}, { message: 'Invalid email format' })
  email?: string;

  @ApiProperty({ example: '9876543210', required: false })
  @IsOptional()
  @Matches(/^[6-9]\d{9}$/, { message: 'Invalid mobile number format' })
  mobile?: string;

  @ApiProperty({ example: 'securepass' })
  @IsString()
  @IsNotEmpty({ message: 'Password must not be empty' })
  password: string;
}
