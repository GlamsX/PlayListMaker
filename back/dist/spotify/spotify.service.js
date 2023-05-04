"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifyService = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_spotify_1 = require("passport-spotify");
let SpotifyService = class SpotifyService extends (0, passport_1.PassportStrategy)(passport_spotify_1.Strategy, 'spotify') {
    constructor() {
        super({
            clientID: 'cb3eed2bc56446319c935caefe5d80d0',
            clientSecret: 'f86b681bb5f94c43a82e5e970b59c8eb',
            callbackURL: 'http://localhost:3030/spotify/callback',
            scope: ['user-read-private', 'user-read-email'],
        });
    }
    async validate(accessToken, refreshToken, profile) {
        const user = {
            spotifyId: profile.id,
            displayName: profile.displayName,
            accessToken,
            refreshToken,
        };
        console.log('SpotifyService.validate', profile);
        return user;
    }
};
SpotifyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SpotifyService);
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map