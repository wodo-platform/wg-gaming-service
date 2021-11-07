import { GamingLoungeStateEnum } from "./gaming.lounge.state.enum";
import { GamingLoungeTypeEnum } from "./gaming.lounge.type.enum";

export default interface GamingLoungeUpdateDto {
    id: number;
    type: GamingLoungeTypeEnum;
    state: GamingLoungeStateEnum;
    gameTypeId: number;
    assetId: number;
    enterenceFee: number;
    prize: number;
    duration: number;
    deleted: boolean;
}