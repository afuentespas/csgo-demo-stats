import { HeaderModel } from './header-model';
import { TeamModel } from './team-model';

export interface MatchModel {

    header: HeaderModel;

    teams: TeamModel[];

    rounds: any[];

}