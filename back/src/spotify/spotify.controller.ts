import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { SpotifyService } from './spotify.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('spotify')
export class SpotifyController {
  constructor(private readonly spotifyService: SpotifyService) {
    console.log('SpotifyController');
  }

  @Get('')
  getSpotify() {
    return 'Spotify';
  }

  @Get('login')
  @UseGuards(AuthGuard('spotify'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async spotifyAuth(@Req() req) {}

  @Get('callback')
  @UseGuards(AuthGuard('spotify'))
  async spotifyAuthCallback(@Req() req, @Res() res) {
    console.log('SpotifyController.spotifyAuthCallback', req.user);
    res.redirect('http://localhost:3000/?token=' + req.user.accessToken);
  }
}
