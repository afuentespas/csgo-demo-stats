import { TeamModel } from '../models/team-model';
import { PlayerAdapter } from './player-adapter';
import { PlayerModel } from '../models/player-model';

export const enum TeamNumber {
    Unassigned = 0,
    Spectator = 1,
    Terrorists = 2,
    CounterTerrorists = 3
}

export class TeamAdapter {

    private demo: any;

    private playerAdapter: PlayerAdapter;

    constructor(demo: any){
        this.demo = demo;
        this.playerAdapter = new PlayerAdapter(demo);
    }

    public getTeams(): TeamModel[] {
        return [this.getTeam(TeamNumber.Terrorists), this.getTeam(TeamNumber.CounterTerrorists)];
    }

    public getPlayersFromTeam(teamNumber: TeamNumber): PlayerModel[]{
        return this.playerAdapter.getPlayers()
            .filter(player => teamNumber == player.teamNumber)
            .sort((p1: PlayerModel, p2: PlayerModel) => p2.score - p1.score)
    }

    public getTeam(teamNumber: TeamNumber): TeamModel{
        return {
            players: this.getPlayersFromTeam(teamNumber),
            clanName: this.demo.teams[teamNumber].clanName,
            teamName: this.demo.teams[teamNumber].teamName,
            score: this.demo.teams[teamNumber].score,
            scoreFirstHalf: this.demo.teams[teamNumber].scoreFirstHalf,
            scoreSecondHalf: this.demo.teams[teamNumber].scoreSecondHalf,
            teamNumber: teamNumber,
            index: this.demo.teams[teamNumber].index
        }
    }

    public updatePlayersStats(): void {
        this.playerAdapter.updatePlayers();
    }

    public getPlayerAdapter(): PlayerAdapter {
        return this.playerAdapter;
    }

}