import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";
import { QueryResult } from "./query-result.model";

export class EntityClass {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
}
