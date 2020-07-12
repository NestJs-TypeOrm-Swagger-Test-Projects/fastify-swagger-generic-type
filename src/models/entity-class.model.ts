import { ApiExtraModels } from "@nestjs/swagger";
import { QueryResult } from "./query-result.model";

@ApiExtraModels(QueryResult)
export class EntityClass {
    id: string;
    name: string;
}
