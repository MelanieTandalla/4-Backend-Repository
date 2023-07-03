import { PartialType } from '@nestjs/mapped-types';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class AdminDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  name_admin: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  last_name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  gmail: string;

  @IsNumber()
  @IsNotEmpty()
  telephone: number;

  @IsString()
  @IsNotEmpty()
  password: string;

}

export class UpdateAdminDto extends PartialType(AdminDto) {}
