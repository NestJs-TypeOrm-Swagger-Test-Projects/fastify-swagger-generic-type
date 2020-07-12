import { ApiExtraModels } from "@nestjs/swagger";

@ApiExtraModels(QueryResultLastLink)
export class QueryResultLastLink {
    name: string;
    url: string;
}
