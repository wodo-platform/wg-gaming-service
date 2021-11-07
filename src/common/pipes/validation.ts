import Ajv from "ajv";
import Ajv2019 from "ajv/dist/2019"
import {gamingLoungeCreateValidationSchema} from "../../dto/gaming/lounge/gaming.lounge.create.dto.schema";
import {gamingLoungeUpdateValidationSchema} from "../../dto/gaming/lounge/gaming.lounge.update.dto.schema";

export const ajv = new Ajv2019();

export const VALIDATION_SCHEMA_GAMING_LOUNGE_CREATE = "validation.schema.gaming.lounge.create";
export const VALIDATION_SCHEMA_GAMING_LOUNGE_UPDATE = "validation.schema.gaming.lounge.update";

ajv.addSchema(gamingLoungeCreateValidationSchema, VALIDATION_SCHEMA_GAMING_LOUNGE_CREATE);
ajv.addSchema(gamingLoungeUpdateValidationSchema, VALIDATION_SCHEMA_GAMING_LOUNGE_UPDATE);


