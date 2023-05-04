import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-spotify';

@Injectable()
export class SpotifyService extends PassportStrategy(Strategy, 'spotify') {
  constructor() {
    super({
      clientID: 'cb3eed2bc56446319c935caefe5d80d0',
      clientSecret: 'f86b681bb5f94c43a82e5e970b59c8eb',
      callbackURL: 'http://localhost:3030/spotify/callback',
      scope: ['user-read-private', 'user-read-email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    // Vous pouvez utiliser ces informations pour créer ou mettre à jour un utilisateur dans votre base de données
    const user = {
      spotifyId: profile.id,
      displayName: profile.displayName,
      accessToken,
      refreshToken,
    };

    console.log('SpotifyService.validate', profile);
    return user;
  }
}
