import { HeaderModel } from '../models/header-model';

export class HeaderAdapter {

    private demo: any;

    private fileDate: Date;

    constructor(demo: any, fileDate: Date) {
        this.demo = demo;
        this.fileDate = fileDate !== undefined ? fileDate : new Date;
    }

    getDemoHeaderModel(): HeaderModel {
        return {
            date: this.fileDate,
            tickRate: this.demo.tickRate,
            duration: this.demo.durationTime,
            magic: this.demo.header.magic,
            protocol: this.demo.header.protocol,
            networkProtocol: this.demo.header.networkProtocol,
            serverName: this.demo.header.serverName,
            clientName: this.demo.header.clientName,
            mapName: this.demo.header.mapName,
            gameDirectory: this.demo.header.gameDirectory,
            playbackTime: this.demo.header.playbackTime,
            playbackTicks: this.demo.header.playbackTicks,
            playbackFrames: this.demo.header.playbackFrames,
            signonLength: this.demo.header.signonLength,
        };
    }

}