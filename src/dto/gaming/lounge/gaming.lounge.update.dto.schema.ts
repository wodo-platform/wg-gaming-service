import {JSONSchemaType} from "ajv";
import GamingLoungeUpdateDto from "./gaming.lounge.update.dto.ts";

export const gamingLoungeUpdateValidationSchema:JSONSchemaType<GamingLoungeUpdateDto> = {
    
    type: 'object', 
    // Type can be: number, integer, string, boolean, array, object or null. see https://ajv.js.org/json-schema.html
    properties: {
        id:           { type: "number", minimum:1 }, 
        type:         { type: "number", minimum:1, maximum: 2 }, 
        state:        { type: "number", minimum:1, maximum: 5 },
        gameTypeId:   { type: "number"},
        assetId:      { type: "number", minimum:1, maximum: 3},
        enterenceFee: { type: "number", minimum: 0.0000001},
        prize:        { type: "number"},
        duration:     { type: "number", minimum:1},
        deleted:      { type: "boolean"}
    },
    required: ["id","type","state","gameTypeId","assetId","enterenceFee","prize","duration","deleted"],
    additionalProperties: false
};