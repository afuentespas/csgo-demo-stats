import { moduleMetadata } from '@storybook/angular';
import { TeamStatsTableComponent } from 'src/app/shared/match-stats/team-stats-table/team-stats-table.component';
import { PlayerStatsRowModule } from 'src/app/shared/match-stats/team-stats-table/player-stats-row/player-stats-row.module';
import { CommonModule } from '@angular/common';

export default {
    title: 'Match Components/Team Stats Table',
    component: TeamStatsTableComponent,
    decorators: [
        moduleMetadata({
            declarations: [TeamStatsTableComponent],
            imports: [CommonModule, PlayerStatsRowModule],
        }),
    ]
};

export const CTSide = () => ({
    component: TeamStatsTableComponent,
    props: {
        team: { "players": [ { "steamId": "STEAM_1:0:3798098", "steam64Id": "76561197967861924", "name": "Strato", "userId": 5, "clanTag": "PYMZZ", "kills": 30, "deaths": 15, "assists": 3, "flashAssists": 1, "headShotKills": 13, "teamNumber": 2, "mvps": 6, "score": 76, "killsHistoric": null, "damageHistoric": null }, { "steamId": "STEAM_1:1:423844587", "steam64Id": "76561198807954903", "name": "MOONCAKE", "userId": 4, "clanTag": "", "kills": 24, "deaths": 26, "assists": 6, "flashAssists": 0, "headShotKills": 12, "teamNumber": 2, "mvps": 3, "score": 56, "killsHistoric": null, "damageHistoric": null }, { "steamId": "STEAM_1:1:193404819", "steam64Id": "76561198347075367", "name": "FERRII77", "userId": 9, "clanTag": "", "kills": 20, "deaths": 23, "assists": 3, "flashAssists": 1, "headShotKills": 2, "teamNumber": 2, "mvps": 2, "score": 47, "killsHistoric": null, "damageHistoric": null }, { "steamId": "STEAM_1:1:146969480", "steam64Id": "76561198254204689", "name": "THE JUSTICE", "userId": 6, "clanTag": "PYMZZ", "kills": 14, "deaths": 22, "assists": 1, "flashAssists": 0, "headShotKills": 3, "teamNumber": 2, "mvps": 1, "score": 32, "killsHistoric": null, "damageHistoric": null }, { "steamId": "STEAM_1:0:62632409", "steam64Id": "76561198085530546", "name": "V1ruzZ", "userId": 3, "clanTag": "PYMZZ", "kills": 12, "deaths": 23, "assists": 4, "flashAssists": 0, "headShotKills": 2, "teamNumber": 2, "mvps": 1, "score": 31, "killsHistoric": null, "damageHistoric": null } ], "clanName": "Team 1", "teamName": "TERRORIST", "score": 13, "scoreFirstHalf": 6, "scoreSecondHalf": 7, "teamNumber": 3, "index": 67 }
    },
});

CTSide.story = {
    name: 'Table CT',
};

export const TSide = () => ({
    component: TeamStatsTableComponent,
    props: {
        team: { "players": [ { "steamId": "STEAM_1:0:3798098", "steam64Id": "76561197967861924", "name": "Strato", "userId": 5, "clanTag": "PYMZZ", "kills": 30, "deaths": 15, "assists": 3, "flashAssists": 1, "headShotKills": 13, "teamNumber": 2, "mvps": 6, "score": 76, "killsHistoric": null, "damageHistoric": null }, { "steamId": "STEAM_1:1:423844587", "steam64Id": "76561198807954903", "name": "MOONCAKE", "userId": 4, "clanTag": "", "kills": 24, "deaths": 26, "assists": 6, "flashAssists": 0, "headShotKills": 12, "teamNumber": 2, "mvps": 3, "score": 56, "killsHistoric": null, "damageHistoric": null }, { "steamId": "STEAM_1:1:193404819", "steam64Id": "76561198347075367", "name": "FERRII77", "userId": 9, "clanTag": "", "kills": 20, "deaths": 23, "assists": 3, "flashAssists": 1, "headShotKills": 2, "teamNumber": 2, "mvps": 2, "score": 47, "killsHistoric": null, "damageHistoric": null }, { "steamId": "STEAM_1:1:146969480", "steam64Id": "76561198254204689", "name": "THE JUSTICE", "userId": 6, "clanTag": "PYMZZ", "kills": 14, "deaths": 22, "assists": 1, "flashAssists": 0, "headShotKills": 3, "teamNumber": 2, "mvps": 1, "score": 32, "killsHistoric": null, "damageHistoric": null }, { "steamId": "STEAM_1:0:62632409", "steam64Id": "76561198085530546", "name": "V1ruzZ", "userId": 3, "clanTag": "PYMZZ", "kills": 12, "deaths": 23, "assists": 4, "flashAssists": 0, "headShotKills": 2, "teamNumber": 2, "mvps": 1, "score": 31, "killsHistoric": null, "damageHistoric": null } ], "clanName": "Team 1", "teamName": "TERRORIST", "score": 13, "scoreFirstHalf": 6, "scoreSecondHalf": 7, "teamNumber": 2, "index": 67 }
    },
});

TSide.story = {
    name: 'Table T',
};