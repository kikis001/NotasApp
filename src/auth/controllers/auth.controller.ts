import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';
import { Request } from 'express';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: Request) {
    const user = req.user as User;
    console.log(req);
    return this.authService.generateJWT(user);
  }
  // @UseGuards(AuthGuard('local'))
  // @Post('login')
  // login(@Req() req: Request) {
  // const user = req.user as User;
  //   return user;
  // }
}
