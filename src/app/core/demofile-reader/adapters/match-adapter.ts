import { HeaderAdapter } from './header-adapter';
import { MatchModel } from '../models/match-model';
import { TeamAdapter } from './team-adapter';
import { RoundAdapter } from './round-adapter';

export class MatchAdapter {

    private header: HeaderAdapter;

    private teamAdapter: TeamAdapter;

    private roundAdapter: RoundAdapter;

    constructor(demo: any, fileDate: Date){
        this.header = new HeaderAdapter(demo, fileDate);
        this.teamAdapter = new TeamAdapter(demo);
        this.roundAdapter = new RoundAdapter(demo);
    }

    public getHeaderAdapter(): HeaderAdapter {
        return this.header;
    }

    public getTeamAdapter(): TeamAdapter {
        return this.teamAdapter;
    }

    public getRoundAdapter(): RoundAdapter {
        return this.roundAdapter;
    }

    public getMatchModel(): MatchModel {
        return {
            header: this.getHeaderAdapter().getDemoHeaderModel(),
            teams: this.getTeamAdapter().getTeams(),
            rounds: this.getRoundAdapter().getRounds()
        }
    }

}