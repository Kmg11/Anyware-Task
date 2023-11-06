import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  signin() {
    return this.signToken();
  }

  private async signToken() {
    return {
      token_type: 'Bearer',
      access_token: await this.jwt.signAsync(
        { sub: 'Fake user' },
        {
          expiresIn: '1h',
          secret: this.config.get('JWT_SECRET'),
        },
      ),
    };
  }
}
