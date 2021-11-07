import GamingLoungeCreateDto from "src/dto/gaming/lounge/gaming.lounge.create.dto";

export class GamingLoungeServiceUtil {

    public static validateGLCreatinData(data:GamingLoungeCreateDto) {
        if(data) {
            throw new Error();
        }
    }
}