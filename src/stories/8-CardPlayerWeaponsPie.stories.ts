import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CardPlayerWeaponsPieComponent } from 'src/app/core/components/card-player-weapons-pie/card-player-weapons-pie.component';
import { PlayerWeaponsPieModule } from 'src/app/shared/player-stats/player-weapons-pie/player-weapons-pie.module';
import { CardModule } from 'src/app/shared/card/card.module';

export default {
    title: 'Player Components/Player Weapons Pie',
    component: CardPlayerWeaponsPieComponent,
    decorators: [
        moduleMetadata({
            declarations: [CardPlayerWeaponsPieComponent],
            imports: [CommonModule, PlayerWeaponsPieModule, CardModule],
        }),
    ]
};

export const Default = () => ({
    component: CardPlayerWeaponsPieComponent,
    props: {
        weaponsKills: [
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
        ]
    },
});

Default.story = {
    name: 'Card Player Weapons Pie',
};