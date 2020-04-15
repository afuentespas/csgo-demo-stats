import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RoundsComponent } from 'src/app/shared/match-stats/rounds/rounds.component';
import { RoundsIconsComponent } from 'src/app/shared/match-stats/rounds/rounds-icons/rounds-icons.component';

export default {
    title: 'Match Components/Rounds',
    component: RoundsComponent,
    decorators: [
        moduleMetadata({
            declarations: [RoundsComponent, RoundsIconsComponent],
            imports: [CommonModule],
        }),
    ]
};

export const Rounds = () => ({
    component: RoundsComponent,
    props: {
        teamScore1: 16,
        teamIndex1: 68,
        teamScore2: 13,
        teamIndex2: 67,
        rounds: [{"tick":12520,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":67},{"tick":16844,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":67},{"tick":25125,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":33894,"endReasonCode":12,"endReason":"Target Saved","teamSide":"CT","teamWinnerIndex":67},{"tick":41760,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":67},{"tick":48977,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":67},{"tick":57858,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":65142,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":70657,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":67},{"tick":76047,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":83729,"endReasonCode":1,"endReason":"Target Bombed","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":90980,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":96177,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":104589,"endReasonCode":1,"endReason":"Target Bombed","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":110693,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":68},{"tick":114999,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":68},{"tick":118927,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":68},{"tick":129446,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":67},{"tick":133806,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":67},{"tick":141543,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":68},{"tick":148858,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":67},{"tick":155614,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":67},{"tick":163330,"endReasonCode":7,"endReason":"Bomb Defused","teamSide":"CT","teamWinnerIndex":68},{"tick":168946,"endReasonCode":7,"endReason":"Bomb Defused","teamSide":"CT","teamWinnerIndex":68},{"tick":175426,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":68},{"tick":180786,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":67},{"tick":187872,"endReasonCode":1,"endReason":"Target Bombed","teamSide":"TERRORIST","teamWinnerIndex":67},{"tick":192911,"endReasonCode":9,"endReason":"Terrorist Win","teamSide":"TERRORIST","teamWinnerIndex":67},{"tick":201011,"endReasonCode":8,"endReason":"Counter Terrorists Wins","teamSide":"CT","teamWinnerIndex":68}]
    },
});

Rounds.story = {
    name: 'Rounds Icons',
};