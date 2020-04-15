import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { CardFormDemoReaderModule } from 'src/app/core/components/card-form-demo-reader/card-form-demo-reader.module';
import { CardGeneralInfoModule } from 'src/app/core/components/card-general-info/card-general-info.module';
import { MatchStatsModule } from 'src/app/core/components/match-stats/match-stats.module';
import { TabPlayerStatsModule } from 'src/app/core/components/tab-player-stats/tab-player-stats.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    CardFormDemoReaderModule,
    CardGeneralInfoModule,
    MatchStatsModule,
    TabPlayerStatsModule
  ]
})
export class IndexModule { }
