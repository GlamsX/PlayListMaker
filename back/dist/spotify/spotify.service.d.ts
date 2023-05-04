declare const SpotifyService_base: new (...args: any[]) => any;
export declare class SpotifyService extends SpotifyService_base {
    constructor();
    validate(accessToken: string, refreshToken: string, profile: any): Promise<{
        spotifyId: any;
        displayName: any;
        accessToken: string;
        refreshToken: string;
    }>;
}
export {};
