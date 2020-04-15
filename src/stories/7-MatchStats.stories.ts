import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MatchStatsComponent } from 'src/app/core/components/match-stats/match-stats.component';
import { TeamStatsTableModule } from 'src/app/shared/match-stats/team-stats-table/team-stats-table.module';
import { RoundsModule } from 'src/app/shared/match-stats/rounds/rounds.module';

export default {
    title: 'Match Components/Match Stats',
    component: MatchStatsComponent,
    decorators: [
        moduleMetadata({
            declarations: [MatchStatsComponent],
            imports: [CommonModule, TeamStatsTableModule, RoundsModule],
        }),
    ]
};

export const Default = () => ({
    component: MatchStatsComponent,
    props: {
        teams: [
            {
                "players": [
                    {
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
                    },
                    {
                        "steamId": "STEAM_1:1:423844587",
                        "steam64Id": "76561198807954903",
                        "name": "MOONCAKE",
                        "userId": 4,
                        "clanTag": "",
                        "kills": 24,
                        "deaths": 26,
                        "assists": 6,
                        "flashAssists": 0,
                        "headShotKills": 12,
                        "teamNumber": 2,
                        "mvps": 3,
                        "score": 56,
                        "killsHistoric": [
                            {
                                "round": 1,
                                "weapon": "usp_silencer",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " LT.Nox ™",
                                "assister": null
                            },
                            {
                                "round": 1,
                                "weapon": "usp_silencer",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": null
                            },
                            {
                                "round": 3,
                                "weapon": "ump45",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": null
                            },
                            {
                                "round": 4,
                                "weapon": "m4a1",
                                "headshot": true,
                                "assistedflash": true,
                                "victim": " Skeptic",
                                "assister": "PYMZZ Strato"
                            },
                            {
                                "round": 5,
                                "weapon": "m4a1",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": null
                            },
                            {
                                "round": 6,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " ๋",
                                "assister": null
                            },
                            {
                                "round": 7,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": "PYMZZ Strato"
                            },
                            {
                                "round": 7,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " LT.Nox ™",
                                "assister": null
                            },
                            {
                                "round": 7,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " ๋",
                                "assister": null
                            },
                            {
                                "round": 11,
                                "weapon": "p250",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": null
                            },
                            {
                                "round": 13,
                                "weapon": "p250",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " LT.Nox ™",
                                "assister": null
                            },
                            {
                                "round": 16,
                                "weapon": "glock",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": null
                            },
                            {
                                "round": 17,
                                "weapon": "p250",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": "PYMZZ Strato"
                            },
                            {
                                "round": 19,
                                "weapon": "galilar",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " LT.Nox ™",
                                "assister": null
                            },
                            {
                                "round": 19,
                                "weapon": "galilar",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "hypersense ENSI",
                                "assister": null
                            },
                            {
                                "round": 20,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "hypersense ENSI",
                                "assister": " FERRII77"
                            },
                            {
                                "round": 21,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": null
                            },
                            {
                                "round": 21,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "hypersense ENSI",
                                "assister": null
                            },
                            {
                                "round": 21,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " LT.Nox ™",
                                "assister": null
                            },
                            {
                                "round": 22,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "hypersense ENSI",
                                "assister": null
                            },
                            {
                                "round": 24,
                                "weapon": "mac10",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " ๋",
                                "assister": "PYMZZ V1ruzZ"
                            },
                            {
                                "round": 27,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": null
                            },
                            {
                                "round": 28,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " LT.Nox ™",
                                "assister": " FERRII77"
                            },
                            {
                                "round": 29,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "hypersense ENSI",
                                "assister": null
                            }
                        ],
                        "damageHistoric": [
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 138,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 19,
                                "armor": 88,
                                "weapon": "ak47",
                                "dmg_health": 81,
                                "dmg_armor": 11,
                                "hitgroup": 1
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 0,
                                "armor": 84,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 0,
                                "armor": 74,
                                "weapon": "ak47",
                                "dmg_health": 109,
                                "dmg_armor": 15,
                                "hitgroup": 1
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 74,
                                "armor": 64,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 44,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 73,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 0,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 141,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 62,
                                "armor": 91,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 4
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 30,
                                "armor": 86,
                                "weapon": "ak47",
                                "dmg_health": 32,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 4,
                                "armor": 82,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 0,
                                "armor": 79,
                                "weapon": "ak47",
                                "dmg_health": 18,
                                "dmg_armor": 2,
                                "hitgroup": 8
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 76,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 24,
                                "dmg_armor": 3,
                                "hitgroup": 3
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 63,
                                "armor": 94,
                                "weapon": "ak47",
                                "dmg_health": 13,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 29,
                                "armor": 88,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 0,
                                "armor": 71,
                                "weapon": "ak47",
                                "dmg_health": 111,
                                "dmg_armor": 16,
                                "hitgroup": 1
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 89,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 11,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 70,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 19,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 36,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 43,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 66,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 23,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 43,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 13,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 24,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 74,
                                "armor": 100,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 40,
                                "armor": 95,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 46,
                                "armor": 91,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 0,
                                "armor": 75,
                                "weapon": "ak47",
                                "dmg_health": 109,
                                "dmg_armor": 15,
                                "hitgroup": 1
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 80,
                                "armor": 95,
                                "weapon": "famas",
                                "dmg_health": 20,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 55,
                                "armor": 89,
                                "weapon": "famas",
                                "dmg_health": 25,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 35,
                                "armor": 84,
                                "weapon": "famas",
                                "dmg_health": 20,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 90,
                                "armor": 0,
                                "weapon": "galilar",
                                "dmg_health": 10,
                                "dmg_armor": 0,
                                "hitgroup": 4
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 80,
                                "armor": 0,
                                "weapon": "galilar",
                                "dmg_health": 10,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 70,
                                "armor": 0,
                                "weapon": "galilar",
                                "dmg_health": 10,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 27,
                                "armor": 0,
                                "weapon": "galilar",
                                "dmg_health": 43,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 9,
                                "armor": 0,
                                "weapon": "galilar",
                                "dmg_health": 18,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 0,
                                "armor": 0,
                                "weapon": "galilar",
                                "dmg_health": 35,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 71,
                                "armor": 0,
                                "weapon": "galilar",
                                "dmg_health": 29,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 34,
                                "armor": 0,
                                "weapon": "galilar",
                                "dmg_health": 37,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 5,
                                "armor": 0,
                                "weapon": "galilar",
                                "dmg_health": 29,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 0,
                                "armor": 0,
                                "weapon": "galilar",
                                "dmg_health": 29,
                                "dmg_armor": 0,
                                "hitgroup": 4
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 30,
                                "armor": 79,
                                "weapon": "galilar",
                                "dmg_health": 21,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 19,
                                "armor": 77,
                                "weapon": "galilar",
                                "dmg_health": 11,
                                "dmg_armor": 1,
                                "hitgroup": 5
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 89,
                                "armor": 93,
                                "weapon": "glock",
                                "dmg_health": 11,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 78,
                                "armor": 86,
                                "weapon": "glock",
                                "dmg_health": 11,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 67,
                                "armor": 79,
                                "weapon": "glock",
                                "dmg_health": 11,
                                "dmg_armor": 6,
                                "hitgroup": 5
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 53,
                                "armor": 0,
                                "weapon": "glock",
                                "dmg_health": 24,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 65,
                                "armor": 77,
                                "weapon": "glock",
                                "dmg_health": 2,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 29,
                                "armor": 0,
                                "weapon": "glock",
                                "dmg_health": 24,
                                "dmg_armor": 0,
                                "hitgroup": 5
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 63,
                                "armor": 75,
                                "weapon": "glock",
                                "dmg_health": 2,
                                "dmg_armor": 1,
                                "hitgroup": 5
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 0,
                                "armor": 75,
                                "weapon": "glock",
                                "dmg_health": 94,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 90,
                                "armor": 93,
                                "weapon": "glock",
                                "dmg_health": 10,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 80,
                                "armor": 86,
                                "weapon": "glock",
                                "dmg_health": 10,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 73,
                                "armor": 81,
                                "weapon": "glock",
                                "dmg_health": 7,
                                "dmg_armor": 4,
                                "hitgroup": 5
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 82,
                                "armor": 92,
                                "weapon": "hegrenade",
                                "dmg_health": 18,
                                "dmg_armor": 6,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 55,
                                "armor": 0,
                                "weapon": "hegrenade",
                                "dmg_health": 13,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 88,
                                "armor": 95,
                                "weapon": "hegrenade",
                                "dmg_health": 12,
                                "dmg_armor": 4,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 0,
                                "armor": 0,
                                "weapon": "hkp2000",
                                "dmg_health": 109,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 0,
                                "armor": 83,
                                "weapon": "hkp2000",
                                "dmg_health": 127,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 68,
                                "armor": 83,
                                "weapon": "hkp2000",
                                "dmg_health": 15,
                                "dmg_armor": 7,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 4,
                                "health": 78,
                                "armor": 89,
                                "weapon": "hkp2000",
                                "dmg_health": 22,
                                "dmg_armor": 10,
                                "hitgroup": 1
                            },
                            {
                                "userid": 3,
                                "attacker": 4,
                                "health": 57,
                                "armor": 78,
                                "weapon": "hkp2000",
                                "dmg_health": 21,
                                "dmg_armor": 10,
                                "hitgroup": 1
                            },
                            {
                                "userid": 3,
                                "attacker": 4,
                                "health": 52,
                                "armor": 75,
                                "weapon": "hkp2000",
                                "dmg_health": 5,
                                "dmg_armor": 2,
                                "hitgroup": 5
                            },
                            {
                                "userid": 3,
                                "attacker": 4,
                                "health": 47,
                                "armor": 72,
                                "weapon": "hkp2000",
                                "dmg_health": 5,
                                "dmg_armor": 2,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 99,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 97,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 2,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 94,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 3,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 90,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 4,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 86,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 4,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 37,
                                "armor": 91,
                                "weapon": "m4a1",
                                "dmg_health": 23,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 0,
                                "armor": 71,
                                "weapon": "m4a1",
                                "dmg_health": 89,
                                "dmg_armor": 19,
                                "hitgroup": 1
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 14,
                                "armor": 81,
                                "weapon": "m4a1",
                                "dmg_health": 86,
                                "dmg_armor": 18,
                                "hitgroup": 1
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 34,
                                "armor": 85,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 5
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 30,
                                "armor": 84,
                                "weapon": "m4a1",
                                "dmg_health": 4,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 0,
                                "armor": 0,
                                "weapon": "m4a1",
                                "dmg_health": 124,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 67,
                                "armor": 84,
                                "weapon": "m4a1",
                                "dmg_health": 33,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 42,
                                "armor": 89,
                                "weapon": "m4a1",
                                "dmg_health": 15,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 30,
                                "armor": 89,
                                "weapon": "m4a1",
                                "dmg_health": 12,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 66,
                                "armor": 0,
                                "weapon": "m4a1",
                                "dmg_health": 30,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 36,
                                "armor": 0,
                                "weapon": "m4a1",
                                "dmg_health": 30,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 34,
                                "armor": 0,
                                "weapon": "m4a1",
                                "dmg_health": 2,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 0,
                                "armor": 0,
                                "weapon": "m4a1",
                                "dmg_health": 39,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 74,
                                "armor": 94,
                                "weapon": "m4a1",
                                "dmg_health": 26,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 15,
                                "armor": 80,
                                "weapon": "m4a1",
                                "dmg_health": 85,
                                "dmg_armor": 18,
                                "hitgroup": 1
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 7,
                                "armor": 78,
                                "weapon": "m4a1",
                                "dmg_health": 8,
                                "dmg_armor": 1,
                                "hitgroup": 5
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 29,
                                "armor": 73,
                                "weapon": "mac10",
                                "dmg_health": 15,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 14,
                                "armor": 67,
                                "weapon": "mac10",
                                "dmg_health": 15,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 0,
                                "armor": 61,
                                "weapon": "mac10",
                                "dmg_health": 15,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 4,
                                "health": 89,
                                "armor": 0,
                                "weapon": "p250",
                                "dmg_health": 11,
                                "dmg_armor": 0,
                                "hitgroup": 4
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 80,
                                "armor": 94,
                                "weapon": "p250",
                                "dmg_health": 20,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 60,
                                "armor": 88,
                                "weapon": "p250",
                                "dmg_health": 20,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 0,
                                "armor": 64,
                                "weapon": "p250",
                                "dmg_health": 83,
                                "dmg_armor": 23,
                                "hitgroup": 1
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 77,
                                "armor": 93,
                                "weapon": "p250",
                                "dmg_health": 23,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 67,
                                "armor": 37,
                                "weapon": "p250",
                                "dmg_health": 23,
                                "dmg_armor": 6,
                                "hitgroup": 4
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 54,
                                "armor": 86,
                                "weapon": "p250",
                                "dmg_health": 23,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 31,
                                "armor": 79,
                                "weapon": "p250",
                                "dmg_health": 23,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 57,
                                "armor": 34,
                                "weapon": "p250",
                                "dmg_health": 10,
                                "dmg_armor": 2,
                                "hitgroup": 8
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 8,
                                "armor": 72,
                                "weapon": "p250",
                                "dmg_health": 23,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 35,
                                "armor": 27,
                                "weapon": "p250",
                                "dmg_health": 22,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 12,
                                "armor": 20,
                                "weapon": "p250",
                                "dmg_health": 23,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 0,
                                "armor": 13,
                                "weapon": "p250",
                                "dmg_health": 23,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 0,
                                "armor": 46,
                                "weapon": "p250",
                                "dmg_health": 91,
                                "dmg_armor": 25,
                                "hitgroup": 1
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 57,
                                "armor": 78,
                                "weapon": "p250",
                                "dmg_health": 17,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 4,
                                "health": 40,
                                "armor": 72,
                                "weapon": "p250",
                                "dmg_health": 17,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 76,
                                "armor": 92,
                                "weapon": "p250",
                                "dmg_health": 20,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 56,
                                "armor": 86,
                                "weapon": "p250",
                                "dmg_health": 20,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 35,
                                "armor": 80,
                                "weapon": "p250",
                                "dmg_health": 21,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 4,
                                "health": 9,
                                "armor": 72,
                                "weapon": "p250",
                                "dmg_health": 26,
                                "dmg_armor": 7,
                                "hitgroup": 3
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 79,
                                "armor": 0,
                                "weapon": "ump45",
                                "dmg_health": 21,
                                "dmg_armor": 0,
                                "hitgroup": 5
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 58,
                                "armor": 0,
                                "weapon": "ump45",
                                "dmg_health": 21,
                                "dmg_armor": 0,
                                "hitgroup": 5
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 59,
                                "armor": 0,
                                "weapon": "ump45",
                                "dmg_health": 25,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 34,
                                "armor": 0,
                                "weapon": "ump45",
                                "dmg_health": 25,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 9,
                                "armor": 0,
                                "weapon": "ump45",
                                "dmg_health": 25,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 4,
                                "health": 73,
                                "armor": 90,
                                "weapon": "ump45",
                                "dmg_health": 14,
                                "dmg_armor": 3,
                                "hitgroup": 1
                            },
                            {
                                "userid": 10,
                                "attacker": 4,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ump45",
                                "dmg_health": 25,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 84,
                                "armor": 95,
                                "weapon": "ump45",
                                "dmg_health": 16,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 64,
                                "armor": 89,
                                "weapon": "ump45",
                                "dmg_health": 20,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 48,
                                "armor": 84,
                                "weapon": "ump45",
                                "dmg_health": 16,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 4,
                                "health": 28,
                                "armor": 78,
                                "weapon": "ump45",
                                "dmg_health": 20,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            }
                        ]
                    },
                    {
                        "steamId": "STEAM_1:1:193404819",
                        "steam64Id": "76561198347075367",
                        "name": "FERRII77",
                        "userId": 9,
                        "clanTag": "",
                        "kills": 20,
                        "deaths": 23,
                        "assists": 3,
                        "flashAssists": 1,
                        "headShotKills": 2,
                        "teamNumber": 2,
                        "mvps": 2,
                        "score": 47,
                        "killsHistoric": [
                            {
                                "round": 2,
                                "weapon": "mp5sd",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " ๋",
                                "assister": null
                            },
                            {
                                "round": 2,
                                "weapon": "mp5sd",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "hypersense ENSI",
                                "assister": null
                            },
                            {
                                "round": 4,
                                "weapon": "m4a1_silencer",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " ๋",
                                "assister": null
                            },
                            {
                                "round": 5,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " ๋",
                                "assister": null
                            },
                            {
                                "round": 6,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "hypersense ENSI",
                                "assister": null
                            },
                            {
                                "round": 6,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": null
                            },
                            {
                                "round": 6,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " LT.Nox ™",
                                "assister": null
                            },
                            {
                                "round": 9,
                                "weapon": "usp_silencer",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " ๋",
                                "assister": " MOONCAKE"
                            },
                            {
                                "round": 10,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": null
                            },
                            {
                                "round": 12,
                                "weapon": "m4a1_silencer",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": "PYMZZ THE JUSTICE"
                            },
                            {
                                "round": 12,
                                "weapon": "m4a1_silencer",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " ๋",
                                "assister": null
                            },
                            {
                                "round": 13,
                                "weapon": "fiveseven",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "hypersense ENSI",
                                "assister": " MOONCAKE"
                            },
                            {
                                "round": 18,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " ๋",
                                "assister": "PYMZZ V1ruzZ"
                            },
                            {
                                "round": 22,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": null
                            },
                            {
                                "round": 24,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "hypersense ENSI",
                                "assister": null
                            },
                            {
                                "round": 28,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": null
                            },
                            {
                                "round": 28,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": null
                            },
                            {
                                "round": 28,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " ๋",
                                "assister": null
                            },
                            {
                                "round": 28,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "hypersense ENSI",
                                "assister": null
                            },
                            {
                                "round": 29,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " LT.Nox ™",
                                "assister": " MOONCAKE"
                            }
                        ],
                        "damageHistoric": [
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 65,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 35,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 21,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 44,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 35,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 66,
                                "armor": 95,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 39,
                                "armor": 91,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 4
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 5,
                                "armor": 86,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 0,
                                "armor": 81,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 19,
                                "armor": 85,
                                "weapon": "ak47",
                                "dmg_health": 54,
                                "dmg_armor": 7,
                                "hitgroup": 1
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 16,
                                "armor": 84,
                                "weapon": "ak47",
                                "dmg_health": 3,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 0,
                                "armor": 68,
                                "weapon": "ak47",
                                "dmg_health": 109,
                                "dmg_armor": 15,
                                "hitgroup": 1
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 75,
                                "armor": 100,
                                "weapon": "ak47",
                                "dmg_health": 25,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 10,
                                "attacker": 9,
                                "health": 85,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 15,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 12,
                                "armor": 85,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 0,
                                "armor": 80,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 65,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 35,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 21,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 44,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 65,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 35,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 21,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 44,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 35,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 48,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 42,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 67,
                                "armor": 94,
                                "weapon": "ak47",
                                "dmg_health": 33,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 41,
                                "armor": 90,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 8,
                                "armor": 85,
                                "weapon": "ak47",
                                "dmg_health": 33,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 0,
                                "armor": 81,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 74,
                                "armor": 100,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 60,
                                "armor": 100,
                                "weapon": "ak47",
                                "dmg_health": 14,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 50,
                                "armor": 98,
                                "weapon": "ak47",
                                "dmg_health": 10,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 26,
                                "armor": 89,
                                "weapon": "ak47",
                                "dmg_health": 74,
                                "dmg_armor": 10,
                                "hitgroup": 1
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 73,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 46,
                                "armor": 92,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 9,
                                "health": 39,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 9,
                                "health": 12,
                                "armor": 92,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 9,
                                "health": 0,
                                "armor": 88,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 47,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 43,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 74,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 39,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 35,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 32,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 44,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 44,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 55,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 43,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 20,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 35,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 35,
                                "dmg_armor": 0,
                                "hitgroup": 8
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 30,
                                "armor": 93,
                                "weapon": "ak47",
                                "dmg_health": 10,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 3,
                                "armor": 89,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 0,
                                "armor": 85,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 65,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 51,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 14,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 36,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 15,
                                "dmg_armor": 0,
                                "hitgroup": 5
                            },
                            {
                                "userid": 3,
                                "attacker": 9,
                                "health": 29,
                                "armor": 85,
                                "weapon": "awp",
                                "dmg_health": 28,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 10,
                                "attacker": 9,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 138,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 61,
                                "armor": 98,
                                "weapon": "deagle",
                                "dmg_health": 39,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 30,
                                "armor": 98,
                                "weapon": "deagle",
                                "dmg_health": 31,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 81,
                                "armor": 95,
                                "weapon": "famas",
                                "dmg_health": 19,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 62,
                                "armor": 90,
                                "weapon": "famas",
                                "dmg_health": 19,
                                "dmg_armor": 4,
                                "hitgroup": 5
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 56,
                                "armor": 88,
                                "weapon": "famas",
                                "dmg_health": 6,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 0,
                                "armor": 70,
                                "weapon": "fiveseven",
                                "dmg_health": 28,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 52,
                                "armor": 91,
                                "weapon": "fiveseven",
                                "dmg_health": 19,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 27,
                                "armor": 81,
                                "weapon": "glock",
                                "dmg_health": 73,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 24,
                                "armor": 79,
                                "weapon": "glock",
                                "dmg_health": 3,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 94,
                                "armor": 97,
                                "weapon": "hegrenade",
                                "dmg_health": 6,
                                "dmg_armor": 2,
                                "hitgroup": 0
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 66,
                                "armor": 88,
                                "weapon": "hegrenade",
                                "dmg_health": 34,
                                "dmg_armor": 11,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 9,
                                "health": 93,
                                "armor": 46,
                                "weapon": "hegrenade",
                                "dmg_health": 7,
                                "dmg_armor": 2,
                                "hitgroup": 0
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 17,
                                "armor": 0,
                                "weapon": "hegrenade",
                                "dmg_health": 83,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 98,
                                "armor": 99,
                                "weapon": "hegrenade",
                                "dmg_health": 2,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 90,
                                "armor": 0,
                                "weapon": "hegrenade",
                                "dmg_health": 10,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 9,
                                "health": 83,
                                "armor": 91,
                                "weapon": "hkp2000",
                                "dmg_health": 17,
                                "dmg_armor": 8,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 9,
                                "health": 84,
                                "armor": 91,
                                "weapon": "hkp2000",
                                "dmg_health": 16,
                                "dmg_armor": 8,
                                "hitgroup": 3
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 0,
                                "armor": 67,
                                "weapon": "hkp2000",
                                "dmg_health": 20,
                                "dmg_armor": 10,
                                "hitgroup": 3
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 78,
                                "armor": 81,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 4
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 50,
                                "armor": 74,
                                "weapon": "m4a1",
                                "dmg_health": 28,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 22,
                                "armor": 67,
                                "weapon": "m4a1",
                                "dmg_health": 28,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 0,
                                "armor": 62,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 34,
                                "armor": 80,
                                "weapon": "m4a1",
                                "dmg_health": 27,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 11,
                                "armor": 80,
                                "weapon": "m4a1",
                                "dmg_health": 23,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 0,
                                "armor": 74,
                                "weapon": "m4a1",
                                "dmg_health": 27,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 57,
                                "armor": 89,
                                "weapon": "m4a1",
                                "dmg_health": 27,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 10,
                                "attacker": 9,
                                "health": 45,
                                "armor": 79,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 5
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 10,
                                "armor": 72,
                                "weapon": "m4a1",
                                "dmg_health": 90,
                                "dmg_armor": 19,
                                "hitgroup": 1
                            },
                            {
                                "userid": 10,
                                "attacker": 9,
                                "health": 27,
                                "armor": 77,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 9,
                                "health": 5,
                                "armor": 72,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 9,
                                "health": 0,
                                "armor": 65,
                                "weapon": "m4a1",
                                "dmg_health": 28,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 0,
                                "armor": 72,
                                "weapon": "m4a1",
                                "dmg_health": 24,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 76,
                                "armor": 96,
                                "weapon": "m4a1",
                                "dmg_health": 24,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 12,
                                "attacker": 9,
                                "health": 0,
                                "armor": 0,
                                "weapon": "mp7",
                                "dmg_health": 102,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 75,
                                "armor": 0,
                                "weapon": "mp7",
                                "dmg_health": 25,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 50,
                                "armor": 0,
                                "weapon": "mp7",
                                "dmg_health": 25,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 25,
                                "armor": 0,
                                "weapon": "mp7",
                                "dmg_health": 25,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 9,
                                "health": 0,
                                "armor": 0,
                                "weapon": "mp7",
                                "dmg_health": 25,
                                "dmg_armor": 0,
                                "hitgroup": 5
                            }
                        ]
                    },
                    {
                        "steamId": "STEAM_1:1:146969480",
                        "steam64Id": "76561198254204689",
                        "name": "THE JUSTICE",
                        "userId": 6,
                        "clanTag": "PYMZZ",
                        "kills": 14,
                        "deaths": 22,
                        "assists": 1,
                        "flashAssists": 0,
                        "headShotKills": 3,
                        "teamNumber": 2,
                        "mvps": 1,
                        "score": 32,
                        "killsHistoric": [
                            {
                                "round": 4,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "hypersense ENSI",
                                "assister": null
                            },
                            {
                                "round": 5,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "hypersense ENSI",
                                "assister": null
                            },
                            {
                                "round": 5,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " LT.Nox ™",
                                "assister": "PYMZZ Strato"
                            },
                            {
                                "round": 14,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": null
                            },
                            {
                                "round": 14,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " ๋",
                                "assister": null
                            },
                            {
                                "round": 14,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": null
                            },
                            {
                                "round": 20,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": null
                            },
                            {
                                "round": 22,
                                "weapon": "ump45",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " LT.Nox ™",
                                "assister": null
                            },
                            {
                                "round": 23,
                                "weapon": "hegrenade",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": " FERRII77"
                            },
                            {
                                "round": 24,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": true,
                                "victim": " Skeptic",
                                "assister": " FERRII77"
                            },
                            {
                                "round": 24,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": null
                            },
                            {
                                "round": 25,
                                "weapon": "galilar",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": null
                            },
                            {
                                "round": 27,
                                "weapon": "mac10",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": null
                            },
                            {
                                "round": 27,
                                "weapon": "mac10",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "hypersense ENSI",
                                "assister": null
                            }
                        ],
                        "damageHistoric": [
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 75,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 25,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 73,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 46,
                                "armor": 92,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 19,
                                "armor": 88,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 0,
                                "armor": 83,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 66,
                                "armor": 95,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 0,
                                "armor": 79,
                                "weapon": "ak47",
                                "dmg_health": 109,
                                "dmg_armor": 15,
                                "hitgroup": 1
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 0,
                                "armor": 84,
                                "weapon": "ak47",
                                "dmg_health": 107,
                                "dmg_armor": 15,
                                "hitgroup": 1
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 23,
                                "armor": 94,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 74,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 48,
                                "armor": 89,
                                "weapon": "galilar",
                                "dmg_health": 22,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 26,
                                "armor": 89,
                                "weapon": "galilar",
                                "dmg_health": 22,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 4,
                                "armor": 85,
                                "weapon": "galilar",
                                "dmg_health": 22,
                                "dmg_armor": 3,
                                "hitgroup": 4
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 1,
                                "armor": 84,
                                "weapon": "galilar",
                                "dmg_health": 3,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 0,
                                "armor": 80,
                                "weapon": "galilar",
                                "dmg_health": 21,
                                "dmg_armor": 3,
                                "hitgroup": 3
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 50,
                                "armor": 68,
                                "weapon": "glock",
                                "dmg_health": 13,
                                "dmg_armor": 7,
                                "hitgroup": 3
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 33,
                                "armor": 68,
                                "weapon": "glock",
                                "dmg_health": 17,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 88,
                                "armor": 92,
                                "weapon": "glock",
                                "dmg_health": 12,
                                "dmg_armor": 7,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 74,
                                "armor": 84,
                                "weapon": "glock",
                                "dmg_health": 12,
                                "dmg_armor": 7,
                                "hitgroup": 4
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 59,
                                "armor": 86,
                                "weapon": "hegrenade",
                                "dmg_health": 41,
                                "dmg_armor": 13,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 87,
                                "armor": 94,
                                "weapon": "hegrenade",
                                "dmg_health": 7,
                                "dmg_armor": 2,
                                "hitgroup": 0
                            },
                            {
                                "userid": 8,
                                "attacker": 6,
                                "health": 76,
                                "armor": 89,
                                "weapon": "hegrenade",
                                "dmg_health": 6,
                                "dmg_armor": 2,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 84,
                                "armor": 0,
                                "weapon": "hegrenade",
                                "dmg_health": 16,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 61,
                                "armor": 86,
                                "weapon": "hegrenade",
                                "dmg_health": 39,
                                "dmg_armor": 13,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 95,
                                "armor": 98,
                                "weapon": "hegrenade",
                                "dmg_health": 5,
                                "dmg_armor": 1,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 49,
                                "armor": 82,
                                "weapon": "hegrenade",
                                "dmg_health": 51,
                                "dmg_armor": 17,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 87,
                                "armor": 49,
                                "weapon": "hegrenade",
                                "dmg_health": 13,
                                "dmg_armor": 4,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 90,
                                "armor": 44,
                                "weapon": "hegrenade",
                                "dmg_health": 3,
                                "dmg_armor": 1,
                                "hitgroup": 0
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 65,
                                "armor": 87,
                                "weapon": "hegrenade",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 0,
                                "armor": 0,
                                "weapon": "hegrenade",
                                "dmg_health": 66,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 69,
                                "armor": 83,
                                "weapon": "hkp2000",
                                "dmg_health": 15,
                                "dmg_armor": 7,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 86,
                                "armor": 92,
                                "weapon": "hkp2000",
                                "dmg_health": 14,
                                "dmg_armor": 7,
                                "hitgroup": 5
                            },
                            {
                                "userid": 4,
                                "attacker": 6,
                                "health": 97,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 3,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 4,
                                "attacker": 6,
                                "health": 94,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 3,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 4,
                                "attacker": 6,
                                "health": 91,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 3,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 99,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 98,
                                "armor": 96,
                                "weapon": "inferno",
                                "dmg_health": 2,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 95,
                                "armor": 96,
                                "weapon": "inferno",
                                "dmg_health": 3,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 99,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 97,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 2,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 98,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 2,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 95,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 3,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 94,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 3,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 91,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 4,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 90,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 4,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 96,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 4,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 92,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 4,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 87,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 4,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 87,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 5,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 82,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 5,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 81,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 6,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 76,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 6,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 74,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 7,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 66,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 99,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 60,
                                "armor": 91,
                                "weapon": "m4a1",
                                "dmg_health": 3,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 8,
                                "attacker": 6,
                                "health": 78,
                                "armor": 95,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 6,
                                "health": 56,
                                "armor": 90,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 6,
                                "health": 34,
                                "armor": 85,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 6,
                                "health": 12,
                                "armor": 80,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 6,
                                "health": 0,
                                "armor": 75,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 99,
                                "armor": 100,
                                "weapon": "m4a1",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 77,
                                "armor": 95,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 68,
                                "armor": 93,
                                "weapon": "m4a1",
                                "dmg_health": 9,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 56,
                                "armor": 90,
                                "weapon": "m4a1",
                                "dmg_health": 12,
                                "dmg_armor": 2,
                                "hitgroup": 3
                            },
                            {
                                "userid": 8,
                                "attacker": 6,
                                "health": 89,
                                "armor": 97,
                                "weapon": "m4a1",
                                "dmg_health": 11,
                                "dmg_armor": 2,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 6,
                                "health": 84,
                                "armor": 95,
                                "weapon": "m4a1",
                                "dmg_health": 5,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 6,
                                "health": 8,
                                "armor": 84,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 6,
                                "health": 0,
                                "armor": 79,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 29,
                                "armor": 65,
                                "weapon": "m4a1",
                                "dmg_health": 27,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 2,
                                "armor": 59,
                                "weapon": "m4a1",
                                "dmg_health": 27,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 0,
                                "armor": 54,
                                "weapon": "m4a1",
                                "dmg_health": 21,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 84,
                                "armor": 96,
                                "weapon": "m4a1",
                                "dmg_health": 16,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 81,
                                "armor": 90,
                                "weapon": "m4a1",
                                "dmg_health": 18,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 53,
                                "armor": 83,
                                "weapon": "m4a1",
                                "dmg_health": 28,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 25,
                                "armor": 76,
                                "weapon": "m4a1",
                                "dmg_health": 28,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 6,
                                "health": 0,
                                "armor": 69,
                                "weapon": "m4a1",
                                "dmg_health": 28,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 51,
                                "armor": 76,
                                "weapon": "m4a1",
                                "dmg_health": 27,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 24,
                                "armor": 70,
                                "weapon": "m4a1",
                                "dmg_health": 27,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 0,
                                "armor": 64,
                                "weapon": "m4a1",
                                "dmg_health": 27,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 78,
                                "armor": 95,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 56,
                                "armor": 90,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 34,
                                "armor": 85,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 6,
                                "armor": 78,
                                "weapon": "m4a1",
                                "dmg_health": 28,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 0,
                                "armor": 73,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 70,
                                "armor": 77,
                                "weapon": "mac10",
                                "dmg_health": 30,
                                "dmg_armor": 11,
                                "hitgroup": 1
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 63,
                                "armor": 74,
                                "weapon": "mac10",
                                "dmg_health": 7,
                                "dmg_armor": 2,
                                "hitgroup": 4
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 67,
                                "armor": 0,
                                "weapon": "mac10",
                                "dmg_health": 33,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 41,
                                "armor": 0,
                                "weapon": "mac10",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 6,
                                "health": 0,
                                "armor": 0,
                                "weapon": "mac10",
                                "dmg_health": 108,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 8,
                                "attacker": 6,
                                "health": 27,
                                "armor": 72,
                                "weapon": "mac10",
                                "dmg_health": 62,
                                "dmg_armor": 23,
                                "hitgroup": 1
                            },
                            {
                                "userid": 8,
                                "attacker": 6,
                                "health": 12,
                                "armor": 66,
                                "weapon": "mac10",
                                "dmg_health": 15,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 8,
                                "attacker": 6,
                                "health": 0,
                                "armor": 60,
                                "weapon": "mac10",
                                "dmg_health": 15,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 6,
                                "health": 47,
                                "armor": 90,
                                "weapon": "p250",
                                "dmg_health": 28,
                                "dmg_armor": 8,
                                "hitgroup": 3
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 32,
                                "armor": 0,
                                "weapon": "ump45",
                                "dmg_health": 33,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 12,
                                "armor": 0,
                                "weapon": "ump45",
                                "dmg_health": 20,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 7,
                                "attacker": 6,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ump45",
                                "dmg_health": 25,
                                "dmg_armor": 0,
                                "hitgroup": 5
                            }
                        ]
                    },
                    {
                        "steamId": "STEAM_1:0:62632409",
                        "steam64Id": "76561198085530546",
                        "name": "V1ruzZ",
                        "userId": 3,
                        "clanTag": "PYMZZ",
                        "kills": 12,
                        "deaths": 23,
                        "assists": 4,
                        "flashAssists": 0,
                        "headShotKills": 2,
                        "teamNumber": 2,
                        "mvps": 1,
                        "score": 31,
                        "killsHistoric": [
                            {
                                "round": 2,
                                "weapon": "mp9",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": " MOONCAKE"
                            },
                            {
                                "round": 3,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": null
                            },
                            {
                                "round": 5,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": null
                            },
                            {
                                "round": 6,
                                "weapon": "hegrenade",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": null
                            },
                            {
                                "round": 9,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": null
                            },
                            {
                                "round": 12,
                                "weapon": "famas",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": null
                            },
                            {
                                "round": 13,
                                "weapon": "p250",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": null
                            },
                            {
                                "round": 19,
                                "weapon": "galilar",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": null
                            },
                            {
                                "round": 26,
                                "weapon": "mac10",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " Skeptic",
                                "assister": null
                            },
                            {
                                "round": 26,
                                "weapon": "glock",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " ๋",
                                "assister": null
                            },
                            {
                                "round": 26,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " Eugen",
                                "assister": null
                            },
                            {
                                "round": 27,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " ๋",
                                "assister": null
                            }
                        ],
                        "damageHistoric": [
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 0,
                                "armor": 84,
                                "weapon": "ak47",
                                "dmg_health": 106,
                                "dmg_armor": 15,
                                "hitgroup": 1
                            },
                            {
                                "userid": 7,
                                "attacker": 3,
                                "health": 61,
                                "armor": 49,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 12,
                                "attacker": 3,
                                "health": 73,
                                "armor": 95,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 4,
                                "hitgroup": 4
                            },
                            {
                                "userid": 12,
                                "attacker": 3,
                                "health": 46,
                                "armor": 90,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 73,
                                "armor": 95,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 46,
                                "armor": 90,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 19,
                                "armor": 85,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 4,
                                "hitgroup": 5
                            },
                            {
                                "userid": 8,
                                "attacker": 3,
                                "health": 73,
                                "armor": 95,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 111,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 3,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 138,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 75,
                                "armor": 94,
                                "weapon": "famas",
                                "dmg_health": 25,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 54,
                                "armor": 94,
                                "weapon": "famas",
                                "dmg_health": 21,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 33,
                                "armor": 94,
                                "weapon": "famas",
                                "dmg_health": 21,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 12,
                                "armor": 94,
                                "weapon": "famas",
                                "dmg_health": 21,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 0,
                                "armor": 94,
                                "weapon": "famas",
                                "dmg_health": 21,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 72,
                                "armor": 95,
                                "weapon": "galilar",
                                "dmg_health": 28,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 44,
                                "armor": 90,
                                "weapon": "galilar",
                                "dmg_health": 28,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 22,
                                "armor": 86,
                                "weapon": "galilar",
                                "dmg_health": 22,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 0,
                                "armor": 82,
                                "weapon": "galilar",
                                "dmg_health": 22,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 3,
                                "health": 88,
                                "armor": 92,
                                "weapon": "glock",
                                "dmg_health": 12,
                                "dmg_armor": 7,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 3,
                                "health": 76,
                                "armor": 84,
                                "weapon": "glock",
                                "dmg_health": 12,
                                "dmg_armor": 7,
                                "hitgroup": 2
                            },
                            {
                                "userid": 7,
                                "attacker": 3,
                                "health": 63,
                                "armor": 76,
                                "weapon": "glock",
                                "dmg_health": 13,
                                "dmg_armor": 7,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 3,
                                "health": 11,
                                "armor": 44,
                                "weapon": "glock",
                                "dmg_health": 52,
                                "dmg_armor": 29,
                                "hitgroup": 1
                            },
                            {
                                "userid": 12,
                                "attacker": 3,
                                "health": 0,
                                "armor": 36,
                                "weapon": "glock",
                                "dmg_health": 13,
                                "dmg_armor": 7,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 0,
                                "armor": 0,
                                "weapon": "hegrenade",
                                "dmg_health": 48,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 12,
                                "attacker": 3,
                                "health": 96,
                                "armor": 0,
                                "weapon": "hegrenade",
                                "dmg_health": 4,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 3,
                                "health": 91,
                                "armor": 96,
                                "weapon": "hegrenade",
                                "dmg_health": 9,
                                "dmg_armor": 3,
                                "hitgroup": 0
                            },
                            {
                                "userid": 12,
                                "attacker": 3,
                                "health": 98,
                                "armor": 99,
                                "weapon": "hegrenade",
                                "dmg_health": 2,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 88,
                                "armor": 95,
                                "weapon": "hegrenade",
                                "dmg_health": 12,
                                "dmg_armor": 4,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 99,
                                "armor": 90,
                                "weapon": "hegrenade",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 3,
                                "health": 99,
                                "armor": 0,
                                "weapon": "hegrenade",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 8,
                                "attacker": 3,
                                "health": 51,
                                "armor": 83,
                                "weapon": "hegrenade",
                                "dmg_health": 49,
                                "dmg_armor": 16,
                                "hitgroup": 0
                            },
                            {
                                "userid": 8,
                                "attacker": 3,
                                "health": 89,
                                "armor": 96,
                                "weapon": "hegrenade",
                                "dmg_health": 11,
                                "dmg_armor": 3,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 52,
                                "armor": 75,
                                "weapon": "hkp2000",
                                "dmg_health": 16,
                                "dmg_armor": 7,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 36,
                                "armor": 67,
                                "weapon": "hkp2000",
                                "dmg_health": 16,
                                "dmg_armor": 7,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 20,
                                "armor": 59,
                                "weapon": "hkp2000",
                                "dmg_health": 16,
                                "dmg_armor": 7,
                                "hitgroup": 5
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 99,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 97,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 2,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 94,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 3,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 90,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 4,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 86,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 4,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 81,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 5,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 75,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 6,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 68,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 7,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 47,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 39,
                                "armor": 0,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 92,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 84,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 76,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 68,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 60,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 24,
                                "armor": 74,
                                "weapon": "m4a1",
                                "dmg_health": 21,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 3,
                                "armor": 69,
                                "weapon": "m4a1",
                                "dmg_health": 21,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 0,
                                "armor": 69,
                                "weapon": "m4a1",
                                "dmg_health": 23,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 78,
                                "armor": 95,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 56,
                                "armor": 90,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 34,
                                "armor": 85,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 12,
                                "armor": 80,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 0,
                                "armor": 75,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 3,
                                "health": 78,
                                "armor": 95,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 3,
                                "health": 44,
                                "armor": 79,
                                "weapon": "mac10",
                                "dmg_health": 56,
                                "dmg_armor": 20,
                                "hitgroup": 1
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 83,
                                "armor": 93,
                                "weapon": "mac10",
                                "dmg_health": 17,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 69,
                                "armor": 87,
                                "weapon": "mac10",
                                "dmg_health": 14,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 55,
                                "armor": 81,
                                "weapon": "mac10",
                                "dmg_health": 14,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 41,
                                "armor": 75,
                                "weapon": "mac10",
                                "dmg_health": 14,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 23,
                                "armor": 68,
                                "weapon": "mac10",
                                "dmg_health": 18,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 9,
                                "armor": 62,
                                "weapon": "mac10",
                                "dmg_health": 14,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 11,
                                "attacker": 3,
                                "health": 0,
                                "armor": 39,
                                "weapon": "mac10",
                                "dmg_health": 59,
                                "dmg_armor": 22,
                                "hitgroup": 1
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 41,
                                "armor": 0,
                                "weapon": "mp9",
                                "dmg_health": 17,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 18,
                                "armor": 0,
                                "weapon": "mp9",
                                "dmg_health": 23,
                                "dmg_armor": 0,
                                "hitgroup": 5
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 0,
                                "armor": 0,
                                "weapon": "mp9",
                                "dmg_health": 23,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 2,
                                "armor": 70,
                                "weapon": "p250",
                                "dmg_health": 86,
                                "dmg_armor": 24,
                                "hitgroup": 1
                            },
                            {
                                "userid": 10,
                                "attacker": 3,
                                "health": 0,
                                "armor": 63,
                                "weapon": "p250",
                                "dmg_health": 21,
                                "dmg_armor": 6,
                                "hitgroup": 5
                            }
                        ]
                    }
                ],
                "clanName": "Team 1",
                "teamName": "TERRORIST",
                "score": 13,
                "scoreFirstHalf": 6,
                "scoreSecondHalf": 7,
                "teamNumber": 2,
                "index": 67
            },
            {
                "players": [
                    {
                        "steamId": "STEAM_1:1:185032354",
                        "steam64Id": "76561198330330437",
                        "name": "๋",
                        "userId": 12,
                        "clanTag": "",
                        "kills": 24,
                        "deaths": 19,
                        "assists": 8,
                        "flashAssists": 0,
                        "headShotKills": 11,
                        "teamNumber": 3,
                        "mvps": 2,
                        "score": 63,
                        "killsHistoric": [
                            {
                                "round": 1,
                                "weapon": "glock",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": " Eugen"
                            },
                            {
                                "round": 3,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": " LT.Nox ™"
                            },
                            {
                                "round": 7,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 9,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 10,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 11,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 11,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 13,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 13,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": null
                            },
                            {
                                "round": 14,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": null
                            },
                            {
                                "round": 15,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 16,
                                "weapon": "fiveseven",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 16,
                                "weapon": "fiveseven",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            },
                            {
                                "round": 16,
                                "weapon": "fiveseven",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 16,
                                "weapon": "fiveseven",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 17,
                                "weapon": "fiveseven",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 18,
                                "weapon": "mp9",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 20,
                                "weapon": "m4a1",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": " Eugen"
                            },
                            {
                                "round": 20,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 22,
                                "weapon": "m4a1_silencer",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 24,
                                "weapon": "famas",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 25,
                                "weapon": "mag7",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": null
                            },
                            {
                                "round": 25,
                                "weapon": "mag7",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 27,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": "hypersense ENSI"
                            }
                        ],
                        "damageHistoric": [
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 0,
                                "armor": 83,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 4,
                                "hitgroup": 5
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 73,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 67,
                                "armor": 82,
                                "weapon": "ak47",
                                "dmg_health": 33,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 40,
                                "armor": 77,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 0,
                                "armor": 61,
                                "weapon": "ak47",
                                "dmg_health": 108,
                                "dmg_armor": 15,
                                "hitgroup": 1
                            },
                            {
                                "userid": 6,
                                "attacker": 12,
                                "health": 73,
                                "armor": 95,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 4,
                                "hitgroup": 4
                            },
                            {
                                "userid": 6,
                                "attacker": 12,
                                "health": 39,
                                "armor": 90,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 12,
                                "health": 12,
                                "armor": 85,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 82,
                                "armor": 100,
                                "weapon": "ak47",
                                "dmg_health": 18,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 0,
                                "armor": 100,
                                "weapon": "ak47",
                                "dmg_health": 136,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 73,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 39,
                                "armor": 91,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 12,
                                "armor": 87,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 73,
                                "armor": 81,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 46,
                                "armor": 77,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 12,
                                "armor": 72,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 0,
                                "armor": 67,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 89,
                                "armor": 98,
                                "weapon": "ak47",
                                "dmg_health": 11,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 46,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 12,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 43,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 23,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 35,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 35,
                                "dmg_armor": 0,
                                "hitgroup": 4
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 56,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 44,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 142,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 57,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 43,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 23,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 0,
                                "hitgroup": 4
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 57,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 43,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 14,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 43,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 0,
                                "hitgroup": 5
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 73,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 68,
                                "armor": 95,
                                "weapon": "ak47",
                                "dmg_health": 5,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 42,
                                "armor": 95,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 9,
                                "armor": 90,
                                "weapon": "ak47",
                                "dmg_health": 33,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 0,
                                "armor": 85,
                                "weapon": "ak47",
                                "dmg_health": 33,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 49,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 4
                            },
                            {
                                "userid": 6,
                                "attacker": 12,
                                "health": 74,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 12,
                                "health": 41,
                                "armor": 91,
                                "weapon": "ak47",
                                "dmg_health": 33,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 12,
                                "health": 15,
                                "armor": 87,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 68,
                                "armor": 94,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 41,
                                "armor": 90,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 0,
                                "armor": 74,
                                "weapon": "ak47",
                                "dmg_health": 108,
                                "dmg_armor": 15,
                                "hitgroup": 1
                            },
                            {
                                "userid": 6,
                                "attacker": 12,
                                "health": 0,
                                "armor": 86,
                                "weapon": "awp",
                                "dmg_health": 110,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 80,
                                "armor": 95,
                                "weapon": "famas",
                                "dmg_health": 20,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 55,
                                "armor": 89,
                                "weapon": "famas",
                                "dmg_health": 25,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 30,
                                "armor": 83,
                                "weapon": "famas",
                                "dmg_health": 25,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 10,
                                "armor": 78,
                                "weapon": "famas",
                                "dmg_health": 20,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 0,
                                "armor": 73,
                                "weapon": "famas",
                                "dmg_health": 20,
                                "dmg_armor": 4,
                                "hitgroup": 4
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 0,
                                "armor": 100,
                                "weapon": "fiveseven",
                                "dmg_health": 107,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 61,
                                "armor": 91,
                                "weapon": "fiveseven",
                                "dmg_health": 23,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 6,
                                "attacker": 12,
                                "health": 72,
                                "armor": 98,
                                "weapon": "fiveseven",
                                "dmg_health": 28,
                                "dmg_armor": 1,
                                "hitgroup": 4
                            },
                            {
                                "userid": 6,
                                "attacker": 12,
                                "health": 0,
                                "armor": 98,
                                "weapon": "fiveseven",
                                "dmg_health": 124,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 75,
                                "armor": 98,
                                "weapon": "fiveseven",
                                "dmg_health": 25,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 49,
                                "armor": 96,
                                "weapon": "fiveseven",
                                "dmg_health": 26,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 23,
                                "armor": 94,
                                "weapon": "fiveseven",
                                "dmg_health": 26,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 0,
                                "armor": 92,
                                "weapon": "fiveseven",
                                "dmg_health": 26,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 78,
                                "armor": 98,
                                "weapon": "fiveseven",
                                "dmg_health": 22,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 50,
                                "armor": 96,
                                "weapon": "fiveseven",
                                "dmg_health": 28,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 32,
                                "armor": 96,
                                "weapon": "fiveseven",
                                "dmg_health": 18,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 10,
                                "armor": 94,
                                "weapon": "fiveseven",
                                "dmg_health": 22,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 0,
                                "armor": 94,
                                "weapon": "fiveseven",
                                "dmg_health": 89,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 6,
                                "armor": 0,
                                "weapon": "fiveseven",
                                "dmg_health": 18,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 0,
                                "armor": 0,
                                "weapon": "fiveseven",
                                "dmg_health": 98,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 72,
                                "armor": 95,
                                "weapon": "galilar",
                                "dmg_health": 28,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 0,
                                "armor": 94,
                                "weapon": "glock",
                                "dmg_health": 101,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 6,
                                "attacker": 12,
                                "health": 90,
                                "armor": 94,
                                "weapon": "glock",
                                "dmg_health": 10,
                                "dmg_armor": 5,
                                "hitgroup": 5
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 91,
                                "armor": 94,
                                "weapon": "glock",
                                "dmg_health": 9,
                                "dmg_armor": 5,
                                "hitgroup": 5
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 90,
                                "armor": 93,
                                "weapon": "glock",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 89,
                                "armor": 92,
                                "weapon": "glock",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 43,
                                "armor": 65,
                                "weapon": "glock",
                                "dmg_health": 46,
                                "dmg_armor": 25,
                                "hitgroup": 1
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 61,
                                "armor": 84,
                                "weapon": "hegrenade",
                                "dmg_health": 39,
                                "dmg_armor": 13,
                                "hitgroup": 0
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 57,
                                "armor": 85,
                                "weapon": "hegrenade",
                                "dmg_health": 43,
                                "dmg_armor": 14,
                                "hitgroup": 0
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 58,
                                "armor": 0,
                                "weapon": "hegrenade",
                                "dmg_health": 42,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 80,
                                "armor": 0,
                                "weapon": "hegrenade",
                                "dmg_health": 20,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 51,
                                "armor": 0,
                                "weapon": "hegrenade",
                                "dmg_health": 5,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 68,
                                "armor": 88,
                                "weapon": "hegrenade",
                                "dmg_health": 22,
                                "dmg_armor": 7,
                                "hitgroup": 0
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 95,
                                "armor": 98,
                                "weapon": "hegrenade",
                                "dmg_health": 5,
                                "dmg_armor": 1,
                                "hitgroup": 0
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 44,
                                "armor": 51,
                                "weapon": "hegrenade",
                                "dmg_health": 56,
                                "dmg_armor": 18,
                                "hitgroup": 0
                            },
                            {
                                "userid": 6,
                                "attacker": 12,
                                "health": 90,
                                "armor": 96,
                                "weapon": "hegrenade",
                                "dmg_health": 10,
                                "dmg_armor": 3,
                                "hitgroup": 0
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 92,
                                "armor": 96,
                                "weapon": "hkp2000",
                                "dmg_health": 8,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 6,
                                "attacker": 12,
                                "health": 72,
                                "armor": 87,
                                "weapon": "hkp2000",
                                "dmg_health": 16,
                                "dmg_armor": 7,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 92,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 84,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 76,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 6,
                                "attacker": 12,
                                "health": 0,
                                "armor": 65,
                                "weapon": "m4a1",
                                "dmg_health": 88,
                                "dmg_armor": 18,
                                "hitgroup": 1
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 79,
                                "armor": 95,
                                "weapon": "m4a1",
                                "dmg_health": 21,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 58,
                                "armor": 90,
                                "weapon": "m4a1",
                                "dmg_health": 21,
                                "dmg_armor": 4,
                                "hitgroup": 5
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 51,
                                "armor": 88,
                                "weapon": "m4a1",
                                "dmg_health": 7,
                                "dmg_armor": 1,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 78,
                                "armor": 92,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 56,
                                "armor": 87,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 28,
                                "armor": 80,
                                "weapon": "m4a1",
                                "dmg_health": 28,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 0,
                                "armor": 73,
                                "weapon": "m4a1",
                                "dmg_health": 28,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 78,
                                "armor": 95,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 56,
                                "armor": 90,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 8
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 28,
                                "armor": 83,
                                "weapon": "m4a1",
                                "dmg_health": 28,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 6,
                                "armor": 78,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 0,
                                "armor": 78,
                                "weapon": "m4a1",
                                "dmg_health": 24,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 85,
                                "armor": 97,
                                "weapon": "mag7",
                                "dmg_health": 15,
                                "dmg_armor": 2,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 70,
                                "armor": 94,
                                "weapon": "mag7",
                                "dmg_health": 15,
                                "dmg_armor": 2,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 7,
                                "armor": 83,
                                "weapon": "mag7",
                                "dmg_health": 63,
                                "dmg_armor": 10,
                                "hitgroup": 1
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 0,
                                "armor": 72,
                                "weapon": "mag7",
                                "dmg_health": 63,
                                "dmg_armor": 10,
                                "hitgroup": 1
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 83,
                                "armor": 97,
                                "weapon": "mag7",
                                "dmg_health": 17,
                                "dmg_armor": 2,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 66,
                                "armor": 94,
                                "weapon": "mag7",
                                "dmg_health": 17,
                                "dmg_armor": 2,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 49,
                                "armor": 91,
                                "weapon": "mag7",
                                "dmg_health": 17,
                                "dmg_armor": 2,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 32,
                                "armor": 88,
                                "weapon": "mag7",
                                "dmg_health": 17,
                                "dmg_armor": 2,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 15,
                                "armor": 85,
                                "weapon": "mag7",
                                "dmg_health": 17,
                                "dmg_armor": 2,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 0,
                                "armor": 82,
                                "weapon": "mag7",
                                "dmg_health": 17,
                                "dmg_armor": 2,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 85,
                                "armor": 0,
                                "weapon": "mp9",
                                "dmg_health": 15,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 59,
                                "armor": 0,
                                "weapon": "mp9",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 39,
                                "armor": 0,
                                "weapon": "mp9",
                                "dmg_health": 20,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 12,
                                "health": 24,
                                "armor": 0,
                                "weapon": "mp9",
                                "dmg_health": 15,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 41,
                                "armor": 80,
                                "weapon": "mp9",
                                "dmg_health": 59,
                                "dmg_armor": 19,
                                "hitgroup": 1
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 27,
                                "armor": 75,
                                "weapon": "mp9",
                                "dmg_health": 14,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 13,
                                "armor": 70,
                                "weapon": "mp9",
                                "dmg_health": 14,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 12,
                                "health": 0,
                                "armor": 63,
                                "weapon": "mp9",
                                "dmg_health": 18,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 12,
                                "health": 48,
                                "armor": 82,
                                "weapon": "mp9",
                                "dmg_health": 52,
                                "dmg_armor": 17,
                                "hitgroup": 1
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 84,
                                "armor": 92,
                                "weapon": "p90",
                                "dmg_health": 16,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 68,
                                "armor": 88,
                                "weapon": "p90",
                                "dmg_health": 16,
                                "dmg_armor": 3,
                                "hitgroup": 4
                            },
                            {
                                "userid": 5,
                                "attacker": 12,
                                "health": 52,
                                "armor": 84,
                                "weapon": "p90",
                                "dmg_health": 16,
                                "dmg_armor": 3,
                                "hitgroup": 4
                            }
                        ]
                    },
                    {
                        "steamId": "STEAM_1:1:178082192",
                        "steam64Id": "76561198316430113",
                        "name": "ENSI",
                        "userId": 8,
                        "clanTag": "hypersense",
                        "kills": 23,
                        "deaths": 20,
                        "assists": 2,
                        "flashAssists": 0,
                        "headShotKills": 3,
                        "teamNumber": 3,
                        "mvps": 5,
                        "score": 61,
                        "killsHistoric": [
                            {
                                "round": 7,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 8,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": null
                            },
                            {
                                "round": 8,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 10,
                                "weapon": "nova",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 11,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            },
                            {
                                "round": 12,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 12,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            },
                            {
                                "round": 13,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": " ๋"
                            },
                            {
                                "round": 14,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 15,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 16,
                                "weapon": "usp_silencer",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": null
                            },
                            {
                                "round": 17,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": " LT.Nox ™"
                            },
                            {
                                "round": 18,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": " ๋"
                            },
                            {
                                "round": 20,
                                "weapon": "usp_silencer",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": " ๋"
                            },
                            {
                                "round": 23,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 23,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 23,
                                "weapon": "m4a1",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            },
                            {
                                "round": 23,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": " ๋"
                            },
                            {
                                "round": 24,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": null
                            },
                            {
                                "round": 25,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 25,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 26,
                                "weapon": "xm1014",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 29,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            }
                        ],
                        "damageHistoric": [
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 66,
                                "armor": 95,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 32,
                                "armor": 90,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 56,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 44,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 39,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 17,
                                "dmg_armor": 0,
                                "hitgroup": 5
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 22,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 17,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 35,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 8,
                                "health": 74,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 8,
                                "health": 41,
                                "armor": 91,
                                "weapon": "ak47",
                                "dmg_health": 33,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 8,
                                "health": 15,
                                "armor": 87,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 8,
                                "health": 0,
                                "armor": 83,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 8,
                                "health": 74,
                                "armor": 100,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 9,
                                "attacker": 8,
                                "health": 47,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 3,
                                "attacker": 8,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 109,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 8,
                                "health": 0,
                                "armor": 0,
                                "weapon": "awp",
                                "dmg_health": 113,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 110,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 8,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 110,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 0,
                                "armor": 0,
                                "weapon": "awp",
                                "dmg_health": 114,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 110,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 8,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 111,
                                "dmg_armor": 1,
                                "hitgroup": 4
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 108,
                                "dmg_armor": 1,
                                "hitgroup": 5
                            },
                            {
                                "userid": 9,
                                "attacker": 8,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 108,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 108,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 8,
                                "health": 46,
                                "armor": 98,
                                "weapon": "deagle",
                                "dmg_health": 54,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 8,
                                "health": 23,
                                "armor": 94,
                                "weapon": "deagle",
                                "dmg_health": 50,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 63,
                                "armor": 100,
                                "weapon": "deagle",
                                "dmg_health": 37,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 73,
                                "armor": 97,
                                "weapon": "fiveseven",
                                "dmg_health": 27,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 62,
                                "armor": 95,
                                "weapon": "fiveseven",
                                "dmg_health": 38,
                                "dmg_armor": 1,
                                "hitgroup": 1
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 86,
                                "armor": 91,
                                "weapon": "glock",
                                "dmg_health": 14,
                                "dmg_armor": 8,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 75,
                                "armor": 84,
                                "weapon": "glock",
                                "dmg_health": 11,
                                "dmg_armor": 6,
                                "hitgroup": 5
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 64,
                                "armor": 77,
                                "weapon": "glock",
                                "dmg_health": 11,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 84,
                                "armor": 91,
                                "weapon": "hkp2000",
                                "dmg_health": 16,
                                "dmg_armor": 8,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 0,
                                "armor": 63,
                                "weapon": "hkp2000",
                                "dmg_health": 118,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 3,
                                "attacker": 8,
                                "health": 34,
                                "armor": 79,
                                "weapon": "hkp2000",
                                "dmg_health": 17,
                                "dmg_armor": 8,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 8,
                                "health": 17,
                                "armor": 70,
                                "weapon": "hkp2000",
                                "dmg_health": 17,
                                "dmg_armor": 8,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 8,
                                "health": 0,
                                "armor": 61,
                                "weapon": "hkp2000",
                                "dmg_health": 17,
                                "dmg_armor": 8,
                                "hitgroup": 8
                            },
                            {
                                "userid": 3,
                                "attacker": 8,
                                "health": 2,
                                "armor": 0,
                                "weapon": "m4a1",
                                "dmg_health": 40,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 3,
                                "attacker": 8,
                                "health": 0,
                                "armor": 0,
                                "weapon": "m4a1",
                                "dmg_health": 32,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 51,
                                "armor": 93,
                                "weapon": "m4a1",
                                "dmg_health": 20,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 31,
                                "armor": 88,
                                "weapon": "m4a1",
                                "dmg_health": 20,
                                "dmg_armor": 4,
                                "hitgroup": 5
                            },
                            {
                                "userid": 9,
                                "attacker": 8,
                                "health": 26,
                                "armor": 77,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 8,
                                "health": 0,
                                "armor": 71,
                                "weapon": "m4a1",
                                "dmg_health": 27,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 77,
                                "armor": 100,
                                "weapon": "m4a1",
                                "dmg_health": 23,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 54,
                                "armor": 100,
                                "weapon": "m4a1",
                                "dmg_health": 23,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 33,
                                "armor": 95,
                                "weapon": "m4a1",
                                "dmg_health": 21,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 9,
                                "armor": 80,
                                "weapon": "m4a1",
                                "dmg_health": 91,
                                "dmg_armor": 19,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 0,
                                "armor": 75,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 8,
                                "health": 10,
                                "armor": 69,
                                "weapon": "m4a1",
                                "dmg_health": 90,
                                "dmg_armor": 19,
                                "hitgroup": 1
                            },
                            {
                                "userid": 9,
                                "attacker": 8,
                                "health": 0,
                                "armor": 64,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 8,
                                "health": 0,
                                "armor": 78,
                                "weapon": "m4a1",
                                "dmg_health": 89,
                                "dmg_armor": 19,
                                "hitgroup": 1
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 3,
                                "armor": 74,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 4
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 0,
                                "armor": 67,
                                "weapon": "m4a1",
                                "dmg_health": 28,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 3,
                                "attacker": 8,
                                "health": 10,
                                "armor": 80,
                                "weapon": "m4a1",
                                "dmg_health": 90,
                                "dmg_armor": 19,
                                "hitgroup": 1
                            },
                            {
                                "userid": 3,
                                "attacker": 8,
                                "health": 0,
                                "armor": 75,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 77,
                                "armor": 94,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 8,
                                "health": 82,
                                "armor": 100,
                                "weapon": "mp7",
                                "dmg_health": 18,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 90,
                                "armor": 94,
                                "weapon": "nova",
                                "dmg_health": 10,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 56,
                                "armor": 76,
                                "weapon": "nova",
                                "dmg_health": 34,
                                "dmg_armor": 17,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 23,
                                "armor": 59,
                                "weapon": "nova",
                                "dmg_health": 33,
                                "dmg_armor": 16,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 0,
                                "armor": 42,
                                "weapon": "nova",
                                "dmg_health": 33,
                                "dmg_armor": 16,
                                "hitgroup": 1
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 98,
                                "armor": 98,
                                "weapon": "nova",
                                "dmg_health": 2,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 94,
                                "armor": 95,
                                "weapon": "nova",
                                "dmg_health": 4,
                                "dmg_armor": 2,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 8,
                                "health": 89,
                                "armor": 92,
                                "weapon": "nova",
                                "dmg_health": 5,
                                "dmg_armor": 2,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 74,
                                "armor": 98,
                                "weapon": "xm1014",
                                "dmg_health": 10,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 33,
                                "armor": 92,
                                "weapon": "xm1014",
                                "dmg_health": 41,
                                "dmg_armor": 5,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 21,
                                "armor": 90,
                                "weapon": "xm1014",
                                "dmg_health": 12,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 12,
                                "armor": 90,
                                "weapon": "xm1014",
                                "dmg_health": 9,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 2,
                                "armor": 88,
                                "weapon": "xm1014",
                                "dmg_health": 10,
                                "dmg_armor": 1,
                                "hitgroup": 5
                            },
                            {
                                "userid": 4,
                                "attacker": 8,
                                "health": 0,
                                "armor": 88,
                                "weapon": "xm1014",
                                "dmg_health": 9,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 6,
                                "attacker": 8,
                                "health": 82,
                                "armor": 97,
                                "weapon": "xm1014",
                                "dmg_health": 18,
                                "dmg_armor": 2,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 8,
                                "health": 64,
                                "armor": 94,
                                "weapon": "xm1014",
                                "dmg_health": 18,
                                "dmg_armor": 2,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 8,
                                "health": 46,
                                "armor": 91,
                                "weapon": "xm1014",
                                "dmg_health": 18,
                                "dmg_armor": 2,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 8,
                                "health": 28,
                                "armor": 88,
                                "weapon": "xm1014",
                                "dmg_health": 18,
                                "dmg_armor": 2,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 8,
                                "health": 15,
                                "armor": 88,
                                "weapon": "xm1014",
                                "dmg_health": 13,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            }
                        ]
                    },
                    {
                        "steamId": "STEAM_1:1:72448487",
                        "steam64Id": "76561198105162703",
                        "name": "LT.Nox ™",
                        "userId": 7,
                        "clanTag": "",
                        "kills": 20,
                        "deaths": 16,
                        "assists": 6,
                        "flashAssists": 0,
                        "headShotKills": 8,
                        "teamNumber": 3,
                        "mvps": 3,
                        "score": 54,
                        "killsHistoric": [
                            {
                                "round": 3,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": "hypersense ENSI"
                            },
                            {
                                "round": 3,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 5,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 6,
                                "weapon": "ssg08",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": " ๋"
                            },
                            {
                                "round": 6,
                                "weapon": "ssg08",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 9,
                                "weapon": "deagle",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": " Skeptic"
                            },
                            {
                                "round": 10,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            },
                            {
                                "round": 11,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 12,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 12,
                                "weapon": "deagle",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": " Skeptic"
                            },
                            {
                                "round": 15,
                                "weapon": "awp",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": null
                            },
                            {
                                "round": 18,
                                "weapon": "deagle",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " ๋",
                                "assister": " MOONCAKE"
                            },
                            {
                                "round": 18,
                                "weapon": "deagle",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            },
                            {
                                "round": 19,
                                "weapon": "deagle",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 20,
                                "weapon": "deagle",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 20,
                                "weapon": "deagle",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": null
                            },
                            {
                                "round": 22,
                                "weapon": "deagle",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 24,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            },
                            {
                                "round": 25,
                                "weapon": "deagle",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            },
                            {
                                "round": 27,
                                "weapon": "p250",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 27,
                                "weapon": "taser",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 28,
                                "weapon": "usp_silencer",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            }
                        ],
                        "damageHistoric": [
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 74,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 35,
                                "armor": 90,
                                "weapon": "ak47",
                                "dmg_health": 39,
                                "dmg_armor": 5,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 0,
                                "armor": 85,
                                "weapon": "ak47",
                                "dmg_health": 33,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 3,
                                "attacker": 7,
                                "health": 0,
                                "armor": 56,
                                "weapon": "ak47",
                                "dmg_health": 108,
                                "dmg_armor": 15,
                                "hitgroup": 1
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 73,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 46,
                                "armor": 92,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 19,
                                "armor": 88,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 19,
                                "armor": 65,
                                "weapon": "ak47",
                                "dmg_health": 81,
                                "dmg_armor": 11,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 37,
                                "armor": 100,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 11,
                                "armor": 100,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 0,
                                "armor": 95,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 67,
                                "armor": 90,
                                "weapon": "ak47",
                                "dmg_health": 33,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 41,
                                "armor": 90,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 70,
                                "armor": 94,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 4
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 44,
                                "armor": 94,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 18,
                                "armor": 94,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 0,
                                "armor": 94,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 21,
                                "armor": 92,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 0,
                                "armor": 87,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 15,
                                "armor": 100,
                                "weapon": "awp",
                                "dmg_health": 85,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 0,
                                "armor": 0,
                                "weapon": "awp",
                                "dmg_health": 112,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 7,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 137,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 0,
                                "armor": 94,
                                "weapon": "awp",
                                "dmg_health": 442,
                                "dmg_armor": 5,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 97,
                                "armor": 99,
                                "weapon": "deagle",
                                "dmg_health": 3,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 0,
                                "armor": 97,
                                "weapon": "deagle",
                                "dmg_health": 68,
                                "dmg_armor": 2,
                                "hitgroup": 3
                            },
                            {
                                "userid": 3,
                                "attacker": 7,
                                "health": 0,
                                "armor": 90,
                                "weapon": "deagle",
                                "dmg_health": 51,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 7,
                                "health": 42,
                                "armor": 0,
                                "weapon": "deagle",
                                "dmg_health": 58,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 12,
                                "attacker": 7,
                                "health": 0,
                                "armor": 72,
                                "weapon": "deagle",
                                "dmg_health": 11,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 71,
                                "armor": 98,
                                "weapon": "deagle",
                                "dmg_health": 29,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 0,
                                "armor": 93,
                                "weapon": "deagle",
                                "dmg_health": 175,
                                "dmg_armor": 6,
                                "hitgroup": 1
                            },
                            {
                                "userid": 3,
                                "attacker": 7,
                                "health": 54,
                                "armor": 98,
                                "weapon": "deagle",
                                "dmg_health": 46,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 7,
                                "health": 18,
                                "armor": 96,
                                "weapon": "deagle",
                                "dmg_health": 36,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 7,
                                "health": 0,
                                "armor": 94,
                                "weapon": "deagle",
                                "dmg_health": 36,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 7,
                                "health": 0,
                                "armor": 95,
                                "weapon": "deagle",
                                "dmg_health": 130,
                                "dmg_armor": 4,
                                "hitgroup": 1
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 0,
                                "armor": 92,
                                "weapon": "deagle",
                                "dmg_health": 214,
                                "dmg_armor": 7,
                                "hitgroup": 1
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 55,
                                "armor": 98,
                                "weapon": "deagle",
                                "dmg_health": 45,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 45,
                                "armor": 97,
                                "weapon": "deagle",
                                "dmg_health": 55,
                                "dmg_armor": 2,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 0,
                                "armor": 88,
                                "weapon": "deagle",
                                "dmg_health": 184,
                                "dmg_armor": 6,
                                "hitgroup": 1
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 68,
                                "armor": 98,
                                "weapon": "deagle",
                                "dmg_health": 32,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 7,
                                "health": 61,
                                "armor": 98,
                                "weapon": "deagle",
                                "dmg_health": 11,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 60,
                                "armor": 100,
                                "weapon": "deagle",
                                "dmg_health": 40,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 13,
                                "armor": 98,
                                "weapon": "deagle",
                                "dmg_health": 47,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 0,
                                "armor": 96,
                                "weapon": "deagle",
                                "dmg_health": 46,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 96,
                                "armor": 98,
                                "weapon": "hegrenade",
                                "dmg_health": 4,
                                "dmg_armor": 1,
                                "hitgroup": 0
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 66,
                                "armor": 0,
                                "weapon": "hegrenade",
                                "dmg_health": 34,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 9,
                                "attacker": 7,
                                "health": 98,
                                "armor": 99,
                                "weapon": "hegrenade",
                                "dmg_health": 2,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 7,
                                "health": 70,
                                "armor": 83,
                                "weapon": "hegrenade",
                                "dmg_health": 30,
                                "dmg_armor": 10,
                                "hitgroup": 0
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 28,
                                "armor": 73,
                                "weapon": "hkp2000",
                                "dmg_health": 15,
                                "dmg_armor": 7,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 9,
                                "armor": 63,
                                "weapon": "hkp2000",
                                "dmg_health": 19,
                                "dmg_armor": 9,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 56,
                                "armor": 78,
                                "weapon": "hkp2000",
                                "dmg_health": 16,
                                "dmg_armor": 8,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 40,
                                "armor": 69,
                                "weapon": "hkp2000",
                                "dmg_health": 16,
                                "dmg_armor": 8,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 7,
                                "health": 0,
                                "armor": 36,
                                "weapon": "hkp2000",
                                "dmg_health": 66,
                                "dmg_armor": 32,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 99,
                                "armor": 99,
                                "weapon": "hkp2000",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 5
                            },
                            {
                                "userid": 7,
                                "attacker": 7,
                                "health": 60,
                                "armor": 49,
                                "weapon": "inferno",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 7,
                                "health": 58,
                                "armor": 49,
                                "weapon": "inferno",
                                "dmg_health": 2,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 7,
                                "health": 55,
                                "armor": 49,
                                "weapon": "inferno",
                                "dmg_health": 3,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 7,
                                "health": 51,
                                "armor": 49,
                                "weapon": "inferno",
                                "dmg_health": 4,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 7,
                                "attacker": 7,
                                "health": 47,
                                "armor": 49,
                                "weapon": "inferno",
                                "dmg_health": 4,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 3,
                                "attacker": 7,
                                "health": 71,
                                "armor": 95,
                                "weapon": "inferno",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 96,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 4,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 91,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 5,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 85,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 6,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 78,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 7,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 70,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 62,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 54,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 92,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 84,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 7,
                                "health": 39,
                                "armor": 93,
                                "weapon": "knife",
                                "dmg_health": 61,
                                "dmg_armor": 5,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 7,
                                "health": 70,
                                "armor": 93,
                                "weapon": "m4a1",
                                "dmg_health": 30,
                                "dmg_armor": 6,
                                "hitgroup": 1
                            },
                            {
                                "userid": 9,
                                "attacker": 7,
                                "health": 78,
                                "armor": 91,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 7,
                                "health": 56,
                                "armor": 86,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 20,
                                "armor": 90,
                                "weapon": "mp9",
                                "dmg_health": 13,
                                "dmg_armor": 4,
                                "hitgroup": 5
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 16,
                                "armor": 88,
                                "weapon": "mp9",
                                "dmg_health": 4,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 12,
                                "armor": 86,
                                "weapon": "mp9",
                                "dmg_health": 4,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 7,
                                "health": 8,
                                "armor": 84,
                                "weapon": "mp9",
                                "dmg_health": 4,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 7,
                                "health": 79,
                                "armor": 93,
                                "weapon": "p250",
                                "dmg_health": 21,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 7,
                                "health": 58,
                                "armor": 86,
                                "weapon": "p250",
                                "dmg_health": 21,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 7,
                                "health": 37,
                                "armor": 79,
                                "weapon": "p250",
                                "dmg_health": 21,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 7,
                                "health": 0,
                                "armor": 54,
                                "weapon": "p250",
                                "dmg_health": 85,
                                "dmg_armor": 24,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 0,
                                "armor": 58,
                                "weapon": "ssg08",
                                "dmg_health": 72,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 7,
                                "health": 26,
                                "armor": 92,
                                "weapon": "ssg08",
                                "dmg_health": 74,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 7,
                                "health": 0,
                                "armor": 85,
                                "weapon": "ssg08",
                                "dmg_health": 74,
                                "dmg_armor": 6,
                                "hitgroup": 4
                            },
                            {
                                "userid": 4,
                                "attacker": 7,
                                "health": 0,
                                "armor": 100,
                                "weapon": "taser",
                                "dmg_health": 124,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            }
                        ]
                    },
                    {
                        "steamId": "STEAM_1:0:214610506",
                        "steam64Id": "76561198389486740",
                        "name": "Skeptic",
                        "userId": 11,
                        "clanTag": "",
                        "kills": 20,
                        "deaths": 21,
                        "assists": 2,
                        "flashAssists": 0,
                        "headShotKills": 4,
                        "teamNumber": 3,
                        "mvps": 4,
                        "score": 52,
                        "killsHistoric": [
                            {
                                "round": 3,
                                "weapon": "sg556",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": " LT.Nox ™"
                            },
                            {
                                "round": 4,
                                "weapon": "p90",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 7,
                                "weapon": "xm1014",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 7,
                                "weapon": "xm1014",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": " ๋"
                            },
                            {
                                "round": 8,
                                "weapon": "sg556",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            },
                            {
                                "round": 8,
                                "weapon": "sg556",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 10,
                                "weapon": "p90",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": null
                            },
                            {
                                "round": 10,
                                "weapon": "m4a1",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 13,
                                "weapon": "sg556",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 14,
                                "weapon": "sg556",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 17,
                                "weapon": "p90",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            },
                            {
                                "round": 19,
                                "weapon": "p90",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 21,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 21,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            },
                            {
                                "round": 22,
                                "weapon": "taser",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            },
                            {
                                "round": 24,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 28,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 29,
                                "weapon": "scar20",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": null
                            },
                            {
                                "round": 29,
                                "weapon": "scar20",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 29,
                                "weapon": "scar20",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": " LT.Nox ™"
                            }
                        ],
                        "damageHistoric": [
                            {
                                "userid": 3,
                                "attacker": 11,
                                "health": 73,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 3,
                                "attacker": 11,
                                "health": 46,
                                "armor": 92,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 63,
                                "armor": 95,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 29,
                                "armor": 90,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 0,
                                "armor": 86,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 73,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 47,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 20,
                                "armor": 92,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 0,
                                "armor": 87,
                                "weapon": "ak47",
                                "dmg_health": 33,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 134,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 110,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 11,
                                "health": 99,
                                "armor": 99,
                                "weapon": "hegrenade",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 90,
                                "armor": 96,
                                "weapon": "hegrenade",
                                "dmg_health": 10,
                                "dmg_armor": 3,
                                "hitgroup": 0
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 79,
                                "armor": 89,
                                "weapon": "hkp2000",
                                "dmg_health": 21,
                                "dmg_armor": 10,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 88,
                                "armor": 98,
                                "weapon": "inferno",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 11,
                                "health": 92,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 11,
                                "health": 84,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 11,
                                "health": 76,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 11,
                                "health": 68,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 11,
                                "health": 60,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 11,
                                "health": 52,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 11,
                                "health": 44,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 11,
                                "health": 36,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 11,
                                "attacker": 11,
                                "health": 28,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 99,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 1,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 97,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 2,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 26,
                                "armor": 90,
                                "weapon": "inferno",
                                "dmg_health": 3,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 95,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 5,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 89,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 6,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 82,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 7,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 74,
                                "armor": 100,
                                "weapon": "inferno",
                                "dmg_health": 8,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 0,
                                "armor": 78,
                                "weapon": "m4a1",
                                "dmg_health": 90,
                                "dmg_armor": 19,
                                "hitgroup": 1
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 82,
                                "armor": 100,
                                "weapon": "mac10",
                                "dmg_health": 18,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 64,
                                "armor": 100,
                                "weapon": "mac10",
                                "dmg_health": 18,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 47,
                                "armor": 93,
                                "weapon": "mac10",
                                "dmg_health": 17,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 33,
                                "armor": 87,
                                "weapon": "mac10",
                                "dmg_health": 14,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 11,
                                "health": 86,
                                "armor": 96,
                                "weapon": "p90",
                                "dmg_health": 14,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 11,
                                "health": 68,
                                "armor": 91,
                                "weapon": "p90",
                                "dmg_health": 18,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 11,
                                "health": 50,
                                "armor": 86,
                                "weapon": "p90",
                                "dmg_health": 18,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 11,
                                "health": 32,
                                "armor": 81,
                                "weapon": "p90",
                                "dmg_health": 18,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 11,
                                "health": 18,
                                "armor": 77,
                                "weapon": "p90",
                                "dmg_health": 14,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 82,
                                "armor": 100,
                                "weapon": "p90",
                                "dmg_health": 18,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 66,
                                "armor": 96,
                                "weapon": "p90",
                                "dmg_health": 16,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 50,
                                "armor": 92,
                                "weapon": "p90",
                                "dmg_health": 16,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 34,
                                "armor": 88,
                                "weapon": "p90",
                                "dmg_health": 16,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 18,
                                "armor": 84,
                                "weapon": "p90",
                                "dmg_health": 16,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 0,
                                "armor": 79,
                                "weapon": "p90",
                                "dmg_health": 21,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 11,
                                "health": 74,
                                "armor": 88,
                                "weapon": "p90",
                                "dmg_health": 15,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 5,
                                "attacker": 11,
                                "health": 59,
                                "armor": 84,
                                "weapon": "p90",
                                "dmg_health": 15,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 5,
                                "attacker": 11,
                                "health": 0,
                                "armor": 70,
                                "weapon": "p90",
                                "dmg_health": 61,
                                "dmg_armor": 13,
                                "hitgroup": 1
                            },
                            {
                                "userid": 5,
                                "attacker": 11,
                                "health": 80,
                                "armor": 0,
                                "weapon": "p90",
                                "dmg_health": 20,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 11,
                                "health": 60,
                                "armor": 0,
                                "weapon": "p90",
                                "dmg_health": 20,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 37,
                                "armor": 0,
                                "weapon": "p90",
                                "dmg_health": 29,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 8,
                                "armor": 0,
                                "weapon": "p90",
                                "dmg_health": 29,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 0,
                                "armor": 0,
                                "weapon": "p90",
                                "dmg_health": 29,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 12,
                                "attacker": 11,
                                "health": 96,
                                "armor": 98,
                                "weapon": "p90",
                                "dmg_health": 4,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 78,
                                "armor": 92,
                                "weapon": "p90",
                                "dmg_health": 14,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 60,
                                "armor": 87,
                                "weapon": "p90",
                                "dmg_health": 18,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 42,
                                "armor": 82,
                                "weapon": "p90",
                                "dmg_health": 18,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 24,
                                "armor": 77,
                                "weapon": "p90",
                                "dmg_health": 18,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 6,
                                "armor": 72,
                                "weapon": "p90",
                                "dmg_health": 18,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 0,
                                "armor": 68,
                                "weapon": "p90",
                                "dmg_health": 14,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 5,
                                "attacker": 11,
                                "health": 37,
                                "armor": 93,
                                "weapon": "scar20",
                                "dmg_health": 63,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 11,
                                "health": 0,
                                "armor": 86,
                                "weapon": "scar20",
                                "dmg_health": 63,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 14,
                                "armor": 87,
                                "weapon": "scar20",
                                "dmg_health": 63,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 0,
                                "armor": 85,
                                "weapon": "scar20",
                                "dmg_health": 17,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 0,
                                "armor": 79,
                                "weapon": "scar20",
                                "dmg_health": 63,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 6,
                                "armor": 90,
                                "weapon": "sg556",
                                "dmg_health": 29,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 0,
                                "armor": 90,
                                "weapon": "sg556",
                                "dmg_health": 22,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 71,
                                "armor": 0,
                                "weapon": "sg556",
                                "dmg_health": 29,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 35,
                                "armor": 0,
                                "weapon": "sg556",
                                "dmg_health": 36,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 6,
                                "armor": 0,
                                "weapon": "sg556",
                                "dmg_health": 29,
                                "dmg_armor": 0,
                                "hitgroup": 5
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 0,
                                "armor": 0,
                                "weapon": "sg556",
                                "dmg_health": 28,
                                "dmg_armor": 0,
                                "hitgroup": 5
                            },
                            {
                                "userid": 3,
                                "attacker": 11,
                                "health": 72,
                                "armor": 100,
                                "weapon": "sg556",
                                "dmg_health": 28,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 11,
                                "health": 0,
                                "armor": 100,
                                "weapon": "sg556",
                                "dmg_health": 112,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 64,
                                "armor": 100,
                                "weapon": "sg556",
                                "dmg_health": 36,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 35,
                                "armor": 100,
                                "weapon": "sg556",
                                "dmg_health": 29,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 6,
                                "armor": 100,
                                "weapon": "sg556",
                                "dmg_health": 29,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 64,
                                "armor": 0,
                                "weapon": "sg556",
                                "dmg_health": 36,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 28,
                                "armor": 0,
                                "weapon": "sg556",
                                "dmg_health": 36,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 0,
                                "armor": 0,
                                "weapon": "sg556",
                                "dmg_health": 115,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 47,
                                "armor": 88,
                                "weapon": "sg556",
                                "dmg_health": 21,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 19,
                                "armor": 88,
                                "weapon": "sg556",
                                "dmg_health": 28,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 11,
                                "health": 0,
                                "armor": 88,
                                "weapon": "sg556",
                                "dmg_health": 21,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 82,
                                "armor": 100,
                                "weapon": "sg556",
                                "dmg_health": 18,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 0,
                                "armor": 100,
                                "weapon": "taser",
                                "dmg_health": 288,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 77,
                                "armor": 98,
                                "weapon": "xm1014",
                                "dmg_health": 14,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 63,
                                "armor": 96,
                                "weapon": "xm1014",
                                "dmg_health": 14,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 53,
                                "armor": 96,
                                "weapon": "xm1014",
                                "dmg_health": 10,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 39,
                                "armor": 94,
                                "weapon": "xm1014",
                                "dmg_health": 14,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 29,
                                "armor": 94,
                                "weapon": "xm1014",
                                "dmg_health": 10,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 19,
                                "armor": 94,
                                "weapon": "xm1014",
                                "dmg_health": 10,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 5,
                                "armor": 92,
                                "weapon": "xm1014",
                                "dmg_health": 14,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 11,
                                "health": 0,
                                "armor": 90,
                                "weapon": "xm1014",
                                "dmg_health": 14,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 2,
                                "armor": 83,
                                "weapon": "xm1014",
                                "dmg_health": 10,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 11,
                                "health": 0,
                                "armor": 81,
                                "weapon": "xm1014",
                                "dmg_health": 8,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            }
                        ]
                    },
                    {
                        "steamId": "STEAM_1:1:32926370",
                        "steam64Id": "76561198026118469",
                        "name": "Eugen",
                        "userId": 10,
                        "clanTag": "",
                        "kills": 21,
                        "deaths": 25,
                        "assists": 2,
                        "flashAssists": 0,
                        "headShotKills": 8,
                        "teamNumber": 3,
                        "mvps": 2,
                        "score": 45,
                        "killsHistoric": [
                            {
                                "round": 1,
                                "weapon": "glock",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 1,
                                "weapon": "glock",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 3,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 4,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": " LT.Nox ™"
                            },
                            {
                                "round": 5,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": " LT.Nox ™"
                            },
                            {
                                "round": 7,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": null
                            },
                            {
                                "round": 8,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 12,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": null
                            },
                            {
                                "round": 13,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            },
                            {
                                "round": 14,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": " ๋"
                            },
                            {
                                "round": 15,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 15,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            },
                            {
                                "round": 17,
                                "weapon": "famas",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 17,
                                "weapon": "famas",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ Strato",
                                "assister": null
                            },
                            {
                                "round": 18,
                                "weapon": "m4a1",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " MOONCAKE",
                                "assister": null
                            },
                            {
                                "round": 21,
                                "weapon": "ak47",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 23,
                                "weapon": "m4a1",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": null
                            },
                            {
                                "round": 24,
                                "weapon": "ak47",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 26,
                                "weapon": "awp",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": " FERRII77",
                                "assister": null
                            },
                            {
                                "round": 28,
                                "weapon": "hegrenade",
                                "headshot": false,
                                "assistedflash": false,
                                "victim": "PYMZZ V1ruzZ",
                                "assister": " ๋"
                            },
                            {
                                "round": 29,
                                "weapon": "deagle",
                                "headshot": true,
                                "assistedflash": false,
                                "victim": "PYMZZ THE JUSTICE",
                                "assister": null
                            }
                        ],
                        "damageHistoric": [
                            {
                                "userid": 6,
                                "attacker": 10,
                                "health": 55,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 4
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 0,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 82,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 15,
                                "dmg_armor": 2,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 70,
                                "armor": 94,
                                "weapon": "ak47",
                                "dmg_health": 12,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 43,
                                "armor": 90,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 10,
                                "armor": 85,
                                "weapon": "ak47",
                                "dmg_health": 33,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 0,
                                "armor": 80,
                                "weapon": "ak47",
                                "dmg_health": 33,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 10,
                                "health": 54,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 35,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 10,
                                "health": 19,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 35,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 10,
                                "health": 0,
                                "armor": 84,
                                "weapon": "ak47",
                                "dmg_health": 108,
                                "dmg_armor": 15,
                                "hitgroup": 1
                            },
                            {
                                "userid": 6,
                                "attacker": 10,
                                "health": 66,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 10,
                                "health": 23,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 43,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 10,
                                "health": 0,
                                "armor": 0,
                                "weapon": "ak47",
                                "dmg_health": 34,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 10,
                                "health": 23,
                                "armor": 92,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 10,
                                "health": 0,
                                "armor": 76,
                                "weapon": "ak47",
                                "dmg_health": 107,
                                "dmg_armor": 15,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 73,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 0,
                                "armor": 80,
                                "weapon": "ak47",
                                "dmg_health": 110,
                                "dmg_armor": 15,
                                "hitgroup": 1
                            },
                            {
                                "userid": 6,
                                "attacker": 10,
                                "health": 74,
                                "armor": 83,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 10,
                                "health": 5,
                                "armor": 72,
                                "weapon": "ak47",
                                "dmg_health": 69,
                                "dmg_armor": 10,
                                "hitgroup": 1
                            },
                            {
                                "userid": 6,
                                "attacker": 10,
                                "health": 0,
                                "armor": 68,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 3,
                                "attacker": 10,
                                "health": 0,
                                "armor": 84,
                                "weapon": "ak47",
                                "dmg_health": 108,
                                "dmg_armor": 15,
                                "hitgroup": 1
                            },
                            {
                                "userid": 5,
                                "attacker": 10,
                                "health": 25,
                                "armor": 79,
                                "weapon": "ak47",
                                "dmg_health": 27,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 10,
                                "health": 72,
                                "armor": 99,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 7
                            },
                            {
                                "userid": 9,
                                "attacker": 10,
                                "health": 35,
                                "armor": 98,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 9,
                                "attacker": 10,
                                "health": 9,
                                "armor": 98,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 9,
                                "attacker": 10,
                                "health": 0,
                                "armor": 93,
                                "weapon": "ak47",
                                "dmg_health": 33,
                                "dmg_armor": 4,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 10,
                                "health": 48,
                                "armor": 96,
                                "weapon": "ak47",
                                "dmg_health": 26,
                                "dmg_armor": 3,
                                "hitgroup": 5
                            },
                            {
                                "userid": 9,
                                "attacker": 10,
                                "health": 0,
                                "armor": 82,
                                "weapon": "awp",
                                "dmg_health": 135,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 6,
                                "attacker": 10,
                                "health": 0,
                                "armor": 88,
                                "weapon": "awp",
                                "dmg_health": 138,
                                "dmg_armor": 1,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 10,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 110,
                                "dmg_armor": 1,
                                "hitgroup": 4
                            },
                            {
                                "userid": 9,
                                "attacker": 10,
                                "health": 0,
                                "armor": 98,
                                "weapon": "awp",
                                "dmg_health": 111,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 5,
                                "attacker": 10,
                                "health": 61,
                                "armor": 96,
                                "weapon": "deagle",
                                "dmg_health": 39,
                                "dmg_armor": 1,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 10,
                                "health": 0,
                                "armor": 94,
                                "weapon": "deagle",
                                "dmg_health": 163,
                                "dmg_armor": 5,
                                "hitgroup": 1
                            },
                            {
                                "userid": 9,
                                "attacker": 10,
                                "health": 73,
                                "armor": 0,
                                "weapon": "famas",
                                "dmg_health": 27,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 10,
                                "health": 46,
                                "armor": 0,
                                "weapon": "famas",
                                "dmg_health": 27,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 10,
                                "health": 26,
                                "armor": 0,
                                "weapon": "famas",
                                "dmg_health": 20,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 5,
                                "attacker": 10,
                                "health": 40,
                                "armor": 0,
                                "weapon": "famas",
                                "dmg_health": 20,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 5,
                                "attacker": 10,
                                "health": 13,
                                "armor": 0,
                                "weapon": "famas",
                                "dmg_health": 27,
                                "dmg_armor": 0,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 10,
                                "health": 0,
                                "armor": 0,
                                "weapon": "famas",
                                "dmg_health": 27,
                                "dmg_armor": 0,
                                "hitgroup": 5
                            },
                            {
                                "userid": 5,
                                "attacker": 10,
                                "health": 0,
                                "armor": 0,
                                "weapon": "famas",
                                "dmg_health": 34,
                                "dmg_armor": 0,
                                "hitgroup": 3
                            },
                            {
                                "userid": 9,
                                "attacker": 10,
                                "health": 91,
                                "armor": 94,
                                "weapon": "glock",
                                "dmg_health": 9,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 9,
                                "attacker": 10,
                                "health": 11,
                                "armor": 94,
                                "weapon": "glock",
                                "dmg_health": 80,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 3,
                                "attacker": 10,
                                "health": 91,
                                "armor": 94,
                                "weapon": "glock",
                                "dmg_health": 9,
                                "dmg_armor": 5,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 10,
                                "health": 80,
                                "armor": 87,
                                "weapon": "glock",
                                "dmg_health": 11,
                                "dmg_armor": 6,
                                "hitgroup": 3
                            },
                            {
                                "userid": 3,
                                "attacker": 10,
                                "health": 65,
                                "armor": 87,
                                "weapon": "glock",
                                "dmg_health": 15,
                                "dmg_armor": 0,
                                "hitgroup": 6
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 0,
                                "armor": 100,
                                "weapon": "glock",
                                "dmg_health": 100,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 3,
                                "attacker": 10,
                                "health": 0,
                                "armor": 87,
                                "weapon": "glock",
                                "dmg_health": 102,
                                "dmg_armor": 0,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 87,
                                "armor": 92,
                                "weapon": "glock",
                                "dmg_health": 13,
                                "dmg_armor": 7,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 77,
                                "armor": 85,
                                "weapon": "glock",
                                "dmg_health": 10,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 64,
                                "armor": 77,
                                "weapon": "glock",
                                "dmg_health": 13,
                                "dmg_armor": 7,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 54,
                                "armor": 70,
                                "weapon": "glock",
                                "dmg_health": 10,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 44,
                                "armor": 63,
                                "weapon": "glock",
                                "dmg_health": 10,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 31,
                                "armor": 55,
                                "weapon": "glock",
                                "dmg_health": 13,
                                "dmg_armor": 7,
                                "hitgroup": 3
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 21,
                                "armor": 48,
                                "weapon": "glock",
                                "dmg_health": 10,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 11,
                                "armor": 41,
                                "weapon": "glock",
                                "dmg_health": 10,
                                "dmg_armor": 6,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 10,
                                "health": 0,
                                "armor": 33,
                                "weapon": "hegrenade",
                                "dmg_health": 53,
                                "dmg_armor": 17,
                                "hitgroup": 0
                            },
                            {
                                "userid": 6,
                                "attacker": 10,
                                "health": 88,
                                "armor": 95,
                                "weapon": "hegrenade",
                                "dmg_health": 2,
                                "dmg_armor": 0,
                                "hitgroup": 0
                            },
                            {
                                "userid": 5,
                                "attacker": 10,
                                "health": 43,
                                "armor": 81,
                                "weapon": "hkp2000",
                                "dmg_health": 18,
                                "dmg_armor": 9,
                                "hitgroup": 3
                            },
                            {
                                "userid": 5,
                                "attacker": 10,
                                "health": 33,
                                "armor": 50,
                                "weapon": "hkp2000",
                                "dmg_health": 67,
                                "dmg_armor": 33,
                                "hitgroup": 1
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 10,
                                "armor": 83,
                                "weapon": "m4a1",
                                "dmg_health": 21,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 4,
                                "attacker": 10,
                                "health": 0,
                                "armor": 78,
                                "weapon": "m4a1",
                                "dmg_health": 21,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 10,
                                "health": 78,
                                "armor": 95,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 6,
                                "attacker": 10,
                                "health": 56,
                                "armor": 90,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 5
                            },
                            {
                                "userid": 6,
                                "attacker": 10,
                                "health": 29,
                                "armor": 84,
                                "weapon": "m4a1",
                                "dmg_health": 27,
                                "dmg_armor": 5,
                                "hitgroup": 3
                            },
                            {
                                "userid": 3,
                                "attacker": 10,
                                "health": 78,
                                "armor": 95,
                                "weapon": "m4a1",
                                "dmg_health": 22,
                                "dmg_armor": 4,
                                "hitgroup": 2
                            },
                            {
                                "userid": 3,
                                "attacker": 10,
                                "health": 0,
                                "armor": 75,
                                "weapon": "m4a1",
                                "dmg_health": 90,
                                "dmg_armor": 19,
                                "hitgroup": 1
                            }
                        ]
                    }
                ],
                "clanName": "Team 2",
                "teamName": "CT",
                "score": 16,
                "scoreFirstHalf": 9,
                "scoreSecondHalf": 7,
                "teamNumber": 3,
                "index": 68
            }
        ],
        rounds: [{"tick":12520,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":67},{"tick":16844,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":67},{"tick":25125,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":33894,"endReasonCode":12,"endReason":"Target Saved","teamSide":"CT","teamWinnerIndex":67},{"tick":41760,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":67},{"tick":48977,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":67},{"tick":57858,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":65142,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":70657,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":67},{"tick":76047,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":83729,"endReasonCode":1,"endReason":"Target Bombed","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":90980,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":96177,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":104589,"endReasonCode":1,"endReason":"Target Bombed","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":110693,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":114999,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":68},{"tick":118927,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":68},{"tick":129446,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":67},{"tick":133806,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":67},{"tick":141543,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":68},{"tick":148858,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":67},{"tick":155614,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":67},{"tick":163330,"endReasonCode":7,"endReason":"Bomb Defused","teamSide":"CT","teamWinnerIndex":68},{"tick":168946,"endReasonCode":7,"endReason":"Bomb Defused","teamSide":"CT","teamWinnerIndex":68},{"tick":175426,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":68},{"tick":180786,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":67},{"tick":187872,"endReasonCode":1,"endReason":"Target Bombed","teamSide":"TERRORIST","teamWinnerIndex":67},{"tick":192911,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":67},{"tick":201011,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":68}]
    },
});

Default.story = {
    name: 'Match Stats',
};