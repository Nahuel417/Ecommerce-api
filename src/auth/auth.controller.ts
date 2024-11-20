import {
    Body,
    Controller,
    HttpCode,
    Post,
    UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/dto/loginUser.dto';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { ApiTags } from '@nestjs/swagger';
import { EmailInterceptor } from 'src/interceptors/email.interceptor';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    //* POST *//

    @Post('signup')
    @HttpCode(201)
    @UseInterceptors(EmailInterceptor)
    signup(@Body() user: CreateUserDto) {
        return this.authService.signup(user);
    }

    @Post('signin')
    @HttpCode(201)
    signin(@Body() credentials: LoginUserDto) {
        const { email, password } = credentials;
        return this.authService.signin(email, password);
    }
}
