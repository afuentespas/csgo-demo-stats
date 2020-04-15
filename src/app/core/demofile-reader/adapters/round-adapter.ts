import { RoundModel } from '../models/round-model';
declare const eventtypes_1: any;

export class RoundAdapter {

    private demo: any;

    private rounds: RoundModel[]

    private halfTimeCount: number;

    constructor(demo: any){
        this.demo = demo;
        this.rounds = [];
        this.halfTimeCount = 0;
    }

    public resetRounds(): void  {
        this.rounds = [];
    }

    public addRound(event: any){
        let winner = event.winner;
        if (this.halfTimeCount == 0 || this.halfTimeCount % 4 == 0 || (this.halfTimeCount + 1) % 4 == 0) {
            if (winner == 2) winner = 3;
            else winner = 2;
        }
        if (event.winner != 1) {
            this.rounds.push({
                tick: this.demo.currentTick,
                endReasonCode: event.reason,
                endReason: eventtypes_1.EventRoundEndReason[event.reason].match(/[A-Z][a-z]+|[0-9]+/g).join(" "),
                teamSide: this.demo.teams[event.winner].teamName,
                teamWinnerIndex: this.demo.teams[winner].index
            });
        }
        this.sumHalfTimeCount();
    }

    private sumHalfTimeCount(){
        if(this.demo.gameRules.phase == "halftime"){
            this.halfTimeCount++;
        }
    }

    public getRounds(): RoundModel[]{
        return this.rounds;
    }

}