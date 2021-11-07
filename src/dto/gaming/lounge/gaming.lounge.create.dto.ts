import { GamingLoungeStateEnum } from "./gaming.lounge.state.enum";
import { GamingLoungeTypeEnum } from "./gaming.lounge.type.enum";

export default interface GamingLoungeCreateDto {
    type: number;
    state: number;
    gameTypeId: number;
    assetId: number;
    enterenceFee: number;
    prize: number;
    duration: number;
}