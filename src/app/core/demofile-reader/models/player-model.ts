import { PlayerRoundStatsModel } from './player-round-stats-model';

export interface PlayerModel {

    steamId: string;

    steam64Id: string;

    name: string;

    userId: number;

    clanTag: string;

    kills: number;

    deaths: number;

    assists: number;

    flashAssists: number;

    headShotKills: number;

    teamNumber: number;

    mvps: number;

    score: number;

    // roundsStats: PlayerRoundStatsModel[];

    killsHistoric: any[];

    damageHistoric: any[];
}