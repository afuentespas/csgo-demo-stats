import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CardPlayerSummaryComponent } from 'src/app/core/components/card-player-summary/card-player-summary.component';
import { PlayerSummaryComponent } from 'src/app/shared/player-stats/player-summary/player-summary.component';
import { CardModule } from 'src/app/shared/card/card.module';

export default {
    title: 'Player Components/Card Player Summary',
    component: CardPlayerSummaryComponent,
    decorators: [
        moduleMetadata({
            declarations: [CardPlayerSummaryComponent, PlayerSummaryComponent],
            imports: [CommonModule, CardModule],
        }),
    ]
};

export const Default = () => ({
    component: CardPlayerSummaryComponent,
    props: {
        player: {
            "steamId": "STEAM_1:0:3798098",
            "steam64Id": "76561197967861924",
            "name": "Strato",
            "userId": 5,
            "clanTag": "PYMZZ",
            "kills": 30,
            "deaths": 15,
            "assists": 3,
            "flashAssists": 1,
            "headShotKills": 13,
            "teamNumber": 2,
            "mvps": 6,
            "score": 76,
            "killsHistoric": [
                {
                    "round": 1,
                    "weapon": "usp_silencer",
                    "headshot": true,
                    "assistedflash": false,
                    "victim": "hypersense ENSI",
                    "assister": null
                },
                {
                    "round": 1,
                    "weapon": "usp_silencer",
                    "headshot": true,
                    "assistedflash": false,
                    "victim": " ๋",
                    "assister": null
                },
                {
                    "round": 1,
                    "weapon": "usp_silencer",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": " Eugen",
                    "assister": "PYMZZ V1ruzZ"
                },
                {
                    "round": 2,
                    "weapon": "ump45",
                    "headshot": true,
                    "assistedflash": false,
                    "victim": " Skeptic",
                    "assister": null
                },
                {
                    "round": 2,
                    "weapon": "ump45",
                    "headshot": true,
                    "assistedflash": false,
                    "victim": " LT.Nox ™",
                    "assister": null
                },
                {
                    "round": 3,
                    "weapon": "ump45",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": "hypersense ENSI",
                    "assister": null
                },
                {
                    "round": 3,
                    "weapon": "ump45",
                    "headshot": true,
                    "assistedflash": false,
                    "victim": " LT.Nox ™",
                    "assister": null
                },
                {
                    "round": 7,
                    "weapon": "m4a1",
                    "headshot": true,
                    "assistedflash": false,
                    "victim": "hypersense ENSI",
                    "assister": null
                },
                {
                    "round": 9,
                    "weapon": "m4a1",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": "hypersense ENSI",
                    "assister": null
                },
                {
                    "round": 9,
                    "weapon": "m4a1",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": " Skeptic",
                    "assister": null
                },
                {
                    "round": 9,
                    "weapon": "m4a1",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": " LT.Nox ™",
                    "assister": null
                },
                {
                    "round": 10,
                    "weapon": "ak47",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": "hypersense ENSI",
                    "assister": null
                },
                {
                    "round": 11,
                    "weapon": "deagle",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": " Eugen",
                    "assister": null
                },
                {
                    "round": 15,
                    "weapon": "m4a1",
                    "headshot": true,
                    "assistedflash": false,
                    "victim": " Skeptic",
                    "assister": null
                },
                {
                    "round": 16,
                    "weapon": "glock",
                    "headshot": true,
                    "assistedflash": false,
                    "victim": " LT.Nox ™",
                    "assister": null
                },
                {
                    "round": 18,
                    "weapon": "ak47",
                    "headshot": true,
                    "assistedflash": false,
                    "victim": " Skeptic",
                    "assister": null
                },
                {
                    "round": 18,
                    "weapon": "ak47",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": "hypersense ENSI",
                    "assister": null
                },
                {
                    "round": 18,
                    "weapon": "ak47",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": " Eugen",
                    "assister": null
                },
                {
                    "round": 18,
                    "weapon": "ak47",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": " LT.Nox ™",
                    "assister": null
                },
                {
                    "round": 19,
                    "weapon": "ak47",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": " ๋",
                    "assister": null
                },
                {
                    "round": 19,
                    "weapon": "ak47",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": " Eugen",
                    "assister": null
                },
                {
                    "round": 21,
                    "weapon": "ump45",
                    "headshot": true,
                    "assistedflash": false,
                    "victim": " Eugen",
                    "assister": null
                },
                {
                    "round": 21,
                    "weapon": "ak47",
                    "headshot": true,
                    "assistedflash": false,
                    "victim": " ๋",
                    "assister": null
                },
                {
                    "round": 22,
                    "weapon": "ak47",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": " Eugen",
                    "assister": null
                },
                {
                    "round": 22,
                    "weapon": "ak47",
                    "headshot": true,
                    "assistedflash": false,
                    "victim": " ๋",
                    "assister": null
                },
                {
                    "round": 23,
                    "weapon": "ak47",
                    "headshot": true,
                    "assistedflash": false,
                    "victim": " ๋",
                    "assister": null
                },
                {
                    "round": 23,
                    "weapon": "ak47",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": " Eugen",
                    "assister": "PYMZZ V1ruzZ"
                },
                {
                    "round": 26,
                    "weapon": "galilar",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": " LT.Nox ™",
                    "assister": null
                },
                {
                    "round": 26,
                    "weapon": "awp",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": "hypersense ENSI",
                    "assister": " MOONCAKE"
                },
                {
                    "round": 29,
                    "weapon": "awp",
                    "headshot": false,
                    "assistedflash": false,
                    "victim": " Eugen",
                    "assister": null
                }
            ],
            "damageHistoric": [
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 73,
                    "armor": 96,
                    "weapon": "ak47",
                    "dmg_health": 27,
                    "dmg_armor": 3,
                    "hitgroup": 2
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 39,
                    "armor": 91,
                    "weapon": "ak47",
                    "dmg_health": 34,
                    "dmg_armor": 4,
                    "hitgroup": 3
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 12,
                    "armor": 87,
                    "weapon": "ak47",
                    "dmg_health": 27,
                    "dmg_armor": 3,
                    "hitgroup": 2
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 0,
                    "armor": 83,
                    "weapon": "ak47",
                    "dmg_health": 27,
                    "dmg_armor": 3,
                    "hitgroup": 2
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 0,
                    "armor": 72,
                    "weapon": "ak47",
                    "dmg_health": 137,
                    "dmg_armor": 0,
                    "hitgroup": 1
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 74,
                    "armor": 95,
                    "weapon": "ak47",
                    "dmg_health": 26,
                    "dmg_armor": 3,
                    "hitgroup": 4
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 48,
                    "armor": 91,
                    "weapon": "ak47",
                    "dmg_health": 26,
                    "dmg_armor": 3,
                    "hitgroup": 2
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 22,
                    "armor": 87,
                    "weapon": "ak47",
                    "dmg_health": 26,
                    "dmg_armor": 3,
                    "hitgroup": 2
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 9,
                    "armor": 85,
                    "weapon": "ak47",
                    "dmg_health": 13,
                    "dmg_armor": 1,
                    "hitgroup": 3
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 0,
                    "armor": 81,
                    "weapon": "ak47",
                    "dmg_health": 26,
                    "dmg_armor": 3,
                    "hitgroup": 2
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 67,
                    "armor": 95,
                    "weapon": "ak47",
                    "dmg_health": 33,
                    "dmg_armor": 4,
                    "hitgroup": 3
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 41,
                    "armor": 95,
                    "weapon": "ak47",
                    "dmg_health": 26,
                    "dmg_armor": 0,
                    "hitgroup": 7
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 15,
                    "armor": 91,
                    "weapon": "ak47",
                    "dmg_health": 26,
                    "dmg_armor": 3,
                    "hitgroup": 2
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 0,
                    "armor": 87,
                    "weapon": "ak47",
                    "dmg_health": 26,
                    "dmg_armor": 3,
                    "hitgroup": 2
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 52,
                    "armor": 60,
                    "weapon": "ak47",
                    "dmg_health": 22,
                    "dmg_armor": 3,
                    "hitgroup": 1
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 31,
                    "armor": 56,
                    "weapon": "ak47",
                    "dmg_health": 21,
                    "dmg_armor": 3,
                    "hitgroup": 3
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 5,
                    "armor": 52,
                    "weapon": "ak47",
                    "dmg_health": 26,
                    "dmg_armor": 3,
                    "hitgroup": 2
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 0,
                    "armor": 47,
                    "weapon": "ak47",
                    "dmg_health": 33,
                    "dmg_armor": 4,
                    "hitgroup": 3
                },
                {
                    "userid": 12,
                    "attacker": 5,
                    "health": 40,
                    "armor": 0,
                    "weapon": "ak47",
                    "dmg_health": 35,
                    "dmg_armor": 0,
                    "hitgroup": 2
                },
                {
                    "userid": 12,
                    "attacker": 5,
                    "health": 0,
                    "armor": 0,
                    "weapon": "ak47",
                    "dmg_health": 44,
                    "dmg_armor": 0,
                    "hitgroup": 3
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 65,
                    "armor": 0,
                    "weapon": "ak47",
                    "dmg_health": 35,
                    "dmg_armor": 0,
                    "hitgroup": 2
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 21,
                    "armor": 0,
                    "weapon": "ak47",
                    "dmg_health": 44,
                    "dmg_armor": 0,
                    "hitgroup": 3
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 0,
                    "armor": 0,
                    "weapon": "ak47",
                    "dmg_health": 35,
                    "dmg_armor": 0,
                    "hitgroup": 2
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 64,
                    "armor": 0,
                    "weapon": "ak47",
                    "dmg_health": 35,
                    "dmg_armor": 0,
                    "hitgroup": 2
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 29,
                    "armor": 0,
                    "weapon": "ak47",
                    "dmg_health": 35,
                    "dmg_armor": 0,
                    "hitgroup": 2
                },
                {
                    "userid": 12,
                    "attacker": 5,
                    "health": 73,
                    "armor": 96,
                    "weapon": "ak47",
                    "dmg_health": 27,
                    "dmg_armor": 3,
                    "hitgroup": 2
                },
                {
                    "userid": 12,
                    "attacker": 5,
                    "health": 46,
                    "armor": 92,
                    "weapon": "ak47",
                    "dmg_health": 27,
                    "dmg_armor": 3,
                    "hitgroup": 2
                },
                {
                    "userid": 12,
                    "attacker": 5,
                    "health": 0,
                    "armor": 76,
                    "weapon": "ak47",
                    "dmg_health": 108,
                    "dmg_armor": 15,
                    "hitgroup": 1
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 57,
                    "armor": 0,
                    "weapon": "ak47",
                    "dmg_health": 43,
                    "dmg_armor": 0,
                    "hitgroup": 3
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 23,
                    "armor": 0,
                    "weapon": "ak47",
                    "dmg_health": 34,
                    "dmg_armor": 0,
                    "hitgroup": 2
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 0,
                    "armor": 0,
                    "weapon": "ak47",
                    "dmg_health": 34,
                    "dmg_armor": 0,
                    "hitgroup": 2
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 65,
                    "armor": 0,
                    "weapon": "ak47",
                    "dmg_health": 35,
                    "dmg_armor": 0,
                    "hitgroup": 4
                },
                {
                    "userid": 12,
                    "attacker": 5,
                    "health": 0,
                    "armor": 84,
                    "weapon": "ak47",
                    "dmg_health": 107,
                    "dmg_armor": 15,
                    "hitgroup": 1
                },
                {
                    "userid": 12,
                    "attacker": 5,
                    "health": 73,
                    "armor": 95,
                    "weapon": "ak47",
                    "dmg_health": 27,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 12,
                    "attacker": 5,
                    "health": 0,
                    "armor": 78,
                    "weapon": "ak47",
                    "dmg_health": 110,
                    "dmg_armor": 16,
                    "hitgroup": 1
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 0,
                    "armor": 80,
                    "weapon": "ak47",
                    "dmg_health": 27,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 0,
                    "armor": 76,
                    "weapon": "awp",
                    "dmg_health": 108,
                    "dmg_armor": 1,
                    "hitgroup": 2
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 0,
                    "armor": 0,
                    "weapon": "awp",
                    "dmg_health": 111,
                    "dmg_armor": 0,
                    "hitgroup": 2
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 52,
                    "armor": 98,
                    "weapon": "deagle",
                    "dmg_health": 48,
                    "dmg_armor": 1,
                    "hitgroup": 2
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 4,
                    "armor": 96,
                    "weapon": "deagle",
                    "dmg_health": 48,
                    "dmg_armor": 1,
                    "hitgroup": 2
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 0,
                    "armor": 94,
                    "weapon": "deagle",
                    "dmg_health": 48,
                    "dmg_armor": 1,
                    "hitgroup": 2
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 78,
                    "armor": 79,
                    "weapon": "galilar",
                    "dmg_health": 22,
                    "dmg_armor": 3,
                    "hitgroup": 2
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 56,
                    "armor": 75,
                    "weapon": "galilar",
                    "dmg_health": 22,
                    "dmg_armor": 3,
                    "hitgroup": 4
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 34,
                    "armor": 71,
                    "weapon": "galilar",
                    "dmg_health": 22,
                    "dmg_armor": 3,
                    "hitgroup": 5
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 12,
                    "armor": 67,
                    "weapon": "galilar",
                    "dmg_health": 22,
                    "dmg_armor": 3,
                    "hitgroup": 5
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 0,
                    "armor": 63,
                    "weapon": "galilar",
                    "dmg_health": 22,
                    "dmg_armor": 3,
                    "hitgroup": 2
                },
                {
                    "userid": 12,
                    "attacker": 5,
                    "health": 77,
                    "armor": 0,
                    "weapon": "glock",
                    "dmg_health": 23,
                    "dmg_armor": 0,
                    "hitgroup": 5
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 89,
                    "armor": 93,
                    "weapon": "glock",
                    "dmg_health": 11,
                    "dmg_armor": 6,
                    "hitgroup": 2
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 0,
                    "armor": 93,
                    "weapon": "glock",
                    "dmg_health": 95,
                    "dmg_armor": 0,
                    "hitgroup": 1
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 89,
                    "armor": 93,
                    "weapon": "glock",
                    "dmg_health": 11,
                    "dmg_armor": 6,
                    "hitgroup": 3
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 73,
                    "armor": 93,
                    "weapon": "hegrenade",
                    "dmg_health": 1,
                    "dmg_armor": 0,
                    "hitgroup": 0
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 13,
                    "armor": 0,
                    "weapon": "hegrenade",
                    "dmg_health": 26,
                    "dmg_armor": 0,
                    "hitgroup": 0
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 85,
                    "armor": 92,
                    "weapon": "hkp2000",
                    "dmg_health": 15,
                    "dmg_armor": 7,
                    "hitgroup": 2
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 69,
                    "armor": 84,
                    "weapon": "hkp2000",
                    "dmg_health": 16,
                    "dmg_armor": 7,
                    "hitgroup": 2
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 0,
                    "armor": 84,
                    "weapon": "hkp2000",
                    "dmg_health": 126,
                    "dmg_armor": 0,
                    "hitgroup": 1
                },
                {
                    "userid": 12,
                    "attacker": 5,
                    "health": 0,
                    "armor": 92,
                    "weapon": "hkp2000",
                    "dmg_health": 115,
                    "dmg_armor": 0,
                    "hitgroup": 1
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 5,
                    "armor": 51,
                    "weapon": "hkp2000",
                    "dmg_health": 15,
                    "dmg_armor": 7,
                    "hitgroup": 4
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 0,
                    "armor": 43,
                    "weapon": "hkp2000",
                    "dmg_health": 16,
                    "dmg_armor": 7,
                    "hitgroup": 5
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 85,
                    "armor": 92,
                    "weapon": "hkp2000",
                    "dmg_health": 15,
                    "dmg_armor": 7,
                    "hitgroup": 2
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 98,
                    "armor": 0,
                    "weapon": "inferno",
                    "dmg_health": 2,
                    "dmg_armor": 0,
                    "hitgroup": 0
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 78,
                    "armor": 95,
                    "weapon": "m4a1",
                    "dmg_health": 22,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 63,
                    "armor": 91,
                    "weapon": "m4a1",
                    "dmg_health": 15,
                    "dmg_armor": 3,
                    "hitgroup": 5
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 78,
                    "armor": 76,
                    "weapon": "m4a1",
                    "dmg_health": 22,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 56,
                    "armor": 71,
                    "weapon": "m4a1",
                    "dmg_health": 22,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 0,
                    "armor": 100,
                    "weapon": "m4a1",
                    "dmg_health": 125,
                    "dmg_armor": 0,
                    "hitgroup": 1
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 62,
                    "armor": 0,
                    "weapon": "m4a1",
                    "dmg_health": 23,
                    "dmg_armor": 0,
                    "hitgroup": 6
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 31,
                    "armor": 0,
                    "weapon": "m4a1",
                    "dmg_health": 31,
                    "dmg_armor": 0,
                    "hitgroup": 4
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 78,
                    "armor": 95,
                    "weapon": "m4a1",
                    "dmg_health": 22,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 56,
                    "armor": 90,
                    "weapon": "m4a1",
                    "dmg_health": 22,
                    "dmg_armor": 4,
                    "hitgroup": 5
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 28,
                    "armor": 83,
                    "weapon": "m4a1",
                    "dmg_health": 28,
                    "dmg_armor": 6,
                    "hitgroup": 3
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 0,
                    "armor": 76,
                    "weapon": "m4a1",
                    "dmg_health": 28,
                    "dmg_armor": 6,
                    "hitgroup": 3
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 77,
                    "armor": 100,
                    "weapon": "m4a1",
                    "dmg_health": 22,
                    "dmg_armor": 0,
                    "hitgroup": 7
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 57,
                    "armor": 95,
                    "weapon": "m4a1",
                    "dmg_health": 20,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 15,
                    "armor": 85,
                    "weapon": "m4a1",
                    "dmg_health": 21,
                    "dmg_armor": 4,
                    "hitgroup": 5
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 0,
                    "armor": 80,
                    "weapon": "m4a1",
                    "dmg_health": 21,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 74,
                    "armor": 91,
                    "weapon": "m4a1",
                    "dmg_health": 21,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 48,
                    "armor": 85,
                    "weapon": "m4a1",
                    "dmg_health": 26,
                    "dmg_armor": 5,
                    "hitgroup": 3
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 27,
                    "armor": 80,
                    "weapon": "m4a1",
                    "dmg_health": 21,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 6,
                    "armor": 75,
                    "weapon": "m4a1",
                    "dmg_health": 21,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 0,
                    "armor": 70,
                    "weapon": "m4a1",
                    "dmg_health": 21,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 12,
                    "attacker": 5,
                    "health": 78,
                    "armor": 82,
                    "weapon": "m4a1",
                    "dmg_health": 22,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 77,
                    "armor": 94,
                    "weapon": "m4a1",
                    "dmg_health": 23,
                    "dmg_armor": 5,
                    "hitgroup": 1
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 72,
                    "armor": 92,
                    "weapon": "m4a1",
                    "dmg_health": 5,
                    "dmg_armor": 1,
                    "hitgroup": 2
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 50,
                    "armor": 87,
                    "weapon": "m4a1",
                    "dmg_health": 22,
                    "dmg_armor": 4,
                    "hitgroup": 5
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 41,
                    "armor": 84,
                    "weapon": "m4a1",
                    "dmg_health": 9,
                    "dmg_armor": 2,
                    "hitgroup": 2
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 0,
                    "armor": 64,
                    "weapon": "m4a1",
                    "dmg_health": 90,
                    "dmg_armor": 19,
                    "hitgroup": 1
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 95,
                    "armor": 98,
                    "weapon": "m4a1",
                    "dmg_health": 5,
                    "dmg_armor": 1,
                    "hitgroup": 2
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 23,
                    "armor": 78,
                    "weapon": "p250",
                    "dmg_health": 77,
                    "dmg_armor": 21,
                    "hitgroup": 1
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 4,
                    "armor": 72,
                    "weapon": "p250",
                    "dmg_health": 19,
                    "dmg_armor": 5,
                    "hitgroup": 2
                },
                {
                    "userid": 11,
                    "attacker": 5,
                    "health": 0,
                    "armor": 0,
                    "weapon": "ump45",
                    "dmg_health": 124,
                    "dmg_armor": 0,
                    "hitgroup": 1
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 0,
                    "armor": 0,
                    "weapon": "ump45",
                    "dmg_health": 124,
                    "dmg_armor": 0,
                    "hitgroup": 1
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 5,
                    "armor": 69,
                    "weapon": "ump45",
                    "dmg_health": 71,
                    "dmg_armor": 19,
                    "hitgroup": 1
                },
                {
                    "userid": 8,
                    "attacker": 5,
                    "health": 0,
                    "armor": 69,
                    "weapon": "ump45",
                    "dmg_health": 20,
                    "dmg_armor": 0,
                    "hitgroup": 7
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 67,
                    "armor": 88,
                    "weapon": "ump45",
                    "dmg_health": 6,
                    "dmg_armor": 1,
                    "hitgroup": 2
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 40,
                    "armor": 80,
                    "weapon": "ump45",
                    "dmg_health": 27,
                    "dmg_armor": 7,
                    "hitgroup": 1
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 34,
                    "armor": 78,
                    "weapon": "ump45",
                    "dmg_health": 6,
                    "dmg_armor": 1,
                    "hitgroup": 2
                },
                {
                    "userid": 7,
                    "attacker": 5,
                    "health": 0,
                    "armor": 62,
                    "weapon": "ump45",
                    "dmg_health": 59,
                    "dmg_armor": 15,
                    "hitgroup": 1
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 42,
                    "armor": 95,
                    "weapon": "ump45",
                    "dmg_health": 18,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 24,
                    "armor": 90,
                    "weapon": "ump45",
                    "dmg_health": 18,
                    "dmg_armor": 4,
                    "hitgroup": 2
                },
                {
                    "userid": 10,
                    "attacker": 5,
                    "health": 0,
                    "armor": 70,
                    "weapon": "ump45",
                    "dmg_health": 73,
                    "dmg_armor": 19,
                    "hitgroup": 1
                }
            ]
        }
    },
});

Default.story = {
    name: 'Card Player Summary',
};