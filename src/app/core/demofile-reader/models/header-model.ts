export interface HeaderModel {

    date: Date;

    tickRate: number;

    duration: string;

    magic: string;

    protocol: number;

    networkProtocol: number;

    serverName: string;

    clientName: string;

    mapName: string;

    gameDirectory: string;

    playbackTime: number;

    playbackTicks: number;

    playbackFrames: number;
    
    signonLength: number;

}