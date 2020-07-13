import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";

export class QueryResultLastLink {
    @ApiProperty()
    name: string;
    @ApiProperty()
    url: string;
}
