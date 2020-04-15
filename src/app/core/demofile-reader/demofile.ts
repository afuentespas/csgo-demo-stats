import { Output, EventEmitter, Injectable } from '@angular/core';
import { MatchAdapter } from './adapters/match-adapter';
import { MatchModel } from './models/match-model';
declare const demofile: any;
declare const eventtypes_1: any;
declare const Buffer: any;

@Injectable()
export class Demofile {

    @Output() demoEvent: EventEmitter<any> = new EventEmitter<any>()

    constructor() { }

    parseDemoFile(file: any): void {
        let reader: FileReader = new FileReader();
        reader.onload = () => {
            let buf = new Buffer(reader.result);
            let demo = new demofile.DemoFile();
            let matchAdapter: MatchAdapter = null;
            let matchModel: MatchModel;
            let teamsSave = false;
            let currentRound = 0;

            demo.on('start', () => {
                matchAdapter = new MatchAdapter(demo, file.lastModifiedDate);
                this.demoEvent.emit({ event: 'start' });
            });

            demo.on('progress', (perc: number) => {
                let roundPercentage = perc * 100;
                this.demoEvent.emit({ event: 'progress', percentage: roundPercentage });
            });

            demo.gameEvents.on('player_death', (e: any) => {
                e.round = currentRound;
                matchAdapter.getTeamAdapter().getPlayerAdapter().addHistoricKillDeaths(e);
                if (e.assistedflash) {
                    matchAdapter.getTeamAdapter().getPlayerAdapter().addFlashAssister(e.assister);
                }
            });

            demo.gameEvents.on('player_hurt', (e: any) => {
                matchAdapter.getTeamAdapter().getPlayerAdapter().addPlayersHurts(e);
            });

            demo.gameEvents.on('round_announce_match_start', (e: any) => {
                matchAdapter.getRoundAdapter().resetRounds();
                matchAdapter.getTeamAdapter().updatePlayersStats();
                matchAdapter.getTeamAdapter().getPlayerAdapter().resetFlashAssister();
                matchAdapter.getTeamAdapter().getPlayerAdapter().resetHistoricKillDeaths();
                matchAdapter.getTeamAdapter().getPlayerAdapter().resetPlayerHurts();
                currentRound = 1;
            });

            demo.gameEvents.on('round_end', (e: any) => {
                matchAdapter.getRoundAdapter().addRound(e);
                matchAdapter.getTeamAdapter().updatePlayersStats();
                currentRound++;
            });

            demo.gameEvents.on('round_officially_ended', e => { });

            demo.entities.on("beforeremove", (e: any) => {
                if ((e.entity instanceof demofile.Player) && demo.gameRules.phase == "postgame" && !teamsSave) {
                    matchAdapter.getTeamAdapter().updatePlayersStats();
                    matchModel = matchAdapter.getMatchModel();
                    teamsSave = true;
                }
            });

            demo.on('end', (e: any) => {
                if (!teamsSave) {
                    matchAdapter.getTeamAdapter().updatePlayersStats();
                    matchModel = matchAdapter.getMatchModel();
                }
                if (e.error) {
                    this.demoEvent.emit({ event: 'error', msg: "Invalid or corrupted file." });
                } else {
                    this.demoEvent.emit({ event: 'end', matchStats: matchModel });
                }
            });

            try {
                demo.parse(buf);
            } catch (e) {
                this.demoEvent.emit({ event: 'error', msg: e });
            }
        }
        reader.readAsArrayBuffer(file);
    }

}