import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    description: 'El email debe tener un formato valido',
    example: 'example@mail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description:
      'La constraseña debe tener al menos: 1 mayuscula, 1 minuscula, 1 numero y 1 simbolo. Ademas debe tener entre 8 y 15 caracteres',
    example: 'Example1!',
  })
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword({
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @Length(8, 15)
  password: string;
}
