import { SpotifyService } from './spotify.service';
export declare class SpotifyController {
    private readonly spotifyService;
    constructor(spotifyService: SpotifyService);
    getSpotify(): string;
    spotifyAuth(req: any): Promise<void>;
    spotifyAuthCallback(req: any, res: any): Promise<void>;
}
