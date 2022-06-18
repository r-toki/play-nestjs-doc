import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User, UsersService } from '../users/users.service';

export type Payload = {
  username: string;
  sub: number;
};

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(username, pass) {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload: Payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
