import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/shared/card/card.module';
import { CardGeneralInfoComponent } from 'src/app/core/components/card-general-info/card-general-info.component';

export default {
    title: 'Match Components/Card General Info',
    component: CardGeneralInfoComponent,
    decorators: [
        moduleMetadata({
          declarations: [CardGeneralInfoComponent],
          imports: [CommonModule, CardModule],
        }),
      ],
};

export const Default = () => ({
    component: CardGeneralInfoComponent,
    props: { 
        matchHeader: {
            "date":"2019-11-28T16:17:50.029Z",
            "tickRate":64,
            "duration":"00:52:46",
            "magic":"HL2DEMO",
            "protocol":4,
            "networkProtocol":13727,
            "serverName":"Valve CS:GO Spain Server (srcds042.195.12)",
            "clientName":"GOTV Demo",
            "mapName":"de_inferno",
            "gameDirectory":"csgo",
            "playbackTime":3166.796875,
            "playbackTicks":202675,
            "playbackFrames":101290,
            "signonLength":532016
        }
    },
});

Default.story = {
    name: 'Default',
};