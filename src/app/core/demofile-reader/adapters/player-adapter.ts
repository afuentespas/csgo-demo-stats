import { PlayerModel } from '../models/player-model';
import { PlayerRoundStatsModel } from '../models/player-round-stats-model';
import { TeamNumber } from './team-adapter';
import { HistoricKill } from '../models/historic-kills';
import { PlayerHurt } from '../models/player-hurt-model';

export class PlayerAdapter {

    private demo: any;

    private players: PlayerModel[];

    private flashAssisters: number[];

    private historicKillsDeaths: any[];

    private playersHurts: PlayerHurt[];

    constructor(demo: any) {
        this.demo = demo;
        this.players = [];
        this.flashAssisters = [];
        this.historicKillsDeaths = [];
        this.playersHurts = [];
    }

    public addFlashAssister(steamId: number): void {
        this.flashAssisters.push(steamId);
    }

    public resetFlashAssister(): void {
        this.flashAssisters = [];
    }

    public addHistoricKillDeaths(event: any) {
        this.historicKillsDeaths.push(event);
    }

    public resetHistoricKillDeaths(): void {
        this.historicKillsDeaths = [];
    }

    public addPlayersHurts(event: any): void {
        this.playersHurts.push(event);
    }

    public resetPlayerHurts(): void {
        this.playersHurts = [];
    }

    private getDemoPlayers(): PlayerModel[] {
        return this.demo.teams[TeamNumber.Terrorists].members
            .concat(this.demo.teams[TeamNumber.CounterTerrorists].members)
            .filter(player => !player.isFakePlayer)
            .map(player => this.getPlayer(player));
    }

    public updatePlayers(): void {
        let currentPlayers = this.getDemoPlayers();
        currentPlayers.forEach(currentPlayer => {
            let playerInList = false;
            this.players.forEach((player, i) => {
                if (player.steamId == currentPlayer.steamId) {
                    playerInList = true;
                    this.players[i] = currentPlayer;
                }
            })
            if (!playerInList) {
                this.players.push(currentPlayer);
            }
        });
    }

    private getPlayer(demoPlayer: any): PlayerModel {
        return {
            steamId: demoPlayer.steamId,
            steam64Id: demoPlayer.steam64Id,
            name: demoPlayer.name,
            userId: demoPlayer.userId,
            clanTag: demoPlayer.clanTag,
            kills: demoPlayer.kills,
            deaths: demoPlayer.deaths,
            assists: demoPlayer.assists,
            flashAssists: this.flashAssisters.filter(assister => assister == demoPlayer.userId).length,
            headShotKills: demoPlayer.headShotKills,
            teamNumber: demoPlayer.teamNumber,
            mvps: demoPlayer.mvps,
            score: demoPlayer.score,
            //roundsStats: this.getRoundStatsPlayer(demoPlayer),
            killsHistoric: this.getPlayerKillsHistoric(demoPlayer.userId),
            damageHistoric: this.getDamageGivenHistoric(demoPlayer.userId)
        }
    }

    /* private getRoundStatsPlayer(demoPlayer: any): PlayerRoundStatsModel[] {
        return demoPlayer.matchStats.map((roundStats: any) => {
            return {
                kills: roundStats.kills,
                damage: roundStats.damage,
                equipmentValue: roundStats.equipmentValue,
                moneySaved: roundStats.moneySaved,
                killReward: roundStats.killReward,
                liveTime: roundStats.liveTime,
                deaths: roundStats.deaths,
                assists: roundStats.assists,
                headShotKills: roundStats.headShotKills,
                objective: roundStats.objective,
                enemiesFlashed: roundStats.enemiesFlashed,
                utilityDamage: roundStats.utilityDamage
            }
        });
    } */

    private getDamageGivenHistoric(userId: number): PlayerHurt[] {
        return this.playersHurts
            .filter(player => player.attacker == userId)
            .sort((ph1: PlayerHurt, ph2: PlayerHurt) => ph1.weapon.localeCompare(ph2.weapon));
    }

    private getPlayerKillsHistoric(userId: number): HistoricKill[] {
        let map = this.historicKillsDeaths
            .filter(historic => historic.attacker == userId)
            .map(playerKills => {
                let victim = this.players.find(player => player.userId == playerKills.userid);
                let assister = null;
                if (playerKills.assister != 0) {
                    let pAssister = this.players.find(player => player.userId == playerKills.assister);
                    assister = (pAssister !== undefined) ? `${pAssister.clanTag} ${pAssister.name}` : 'BOT';
                }
                return {
                    round: playerKills.round,
                    weapon: playerKills.weapon,
                    headshot: playerKills.headshot,
                    assistedflash: playerKills.assistedflash,
                    victim: (victim !== undefined) ? `${victim.clanTag} ${victim.name}` : 'BOT',
                    assister: assister
                }
            })
        return map;
    }

    public getPlayers(): PlayerModel[] {
        return this.players.sort((p1: PlayerModel, p2: PlayerModel) => p2.score - p1.score);
    }

}