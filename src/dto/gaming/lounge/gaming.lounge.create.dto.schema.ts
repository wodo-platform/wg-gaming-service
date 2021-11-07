import {JSONSchemaType} from "ajv";
import GamingLoungeCreateDto from "src/dto/gaming/lounge/gaming.lounge.create.dto";

export const gamingLoungeCreateValidationSchema:JSONSchemaType<GamingLoungeCreateDto> = {
    
    type: 'object', 
    // Type can be: number, integer, string, boolean, array, object or null. see https://ajv.js.org/json-schema.html
    properties: {
        type:         { type: "number", minimum:1, maximum: 2 }, 
        state:        { type: "number", minimum:1, maximum: 5 },
        gameTypeId:   { type: "number"},
        assetId:      { type: "number", minimum:1, maximum: 3},
        enterenceFee: { type: "number", minimum: 0.0000001},
        prize:        { type: "number"},
        duration:     { type: "number", minimum:1}
    },
    required: ["type","state","gameTypeId","assetId","enterenceFee","prize","duration"],
    additionalProperties: false
};