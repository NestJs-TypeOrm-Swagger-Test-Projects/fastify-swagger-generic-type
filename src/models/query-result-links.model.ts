import { QueryResultLastLink } from "./query-result-last-link.model";
import { ApiExtraModels, ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";

export class QueryResultLinks {
    @ApiPropertyOptional()
    first: string | null;
    @ApiPropertyOptional()
    prev: string | null;
    @ApiPropertyOptional()
    next: string | null;
    @ApiProperty({ type: () => QueryResultLastLink })
    last?: QueryResultLastLink;
}
