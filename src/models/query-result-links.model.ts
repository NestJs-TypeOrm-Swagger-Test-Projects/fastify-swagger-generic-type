import { QueryResultLastLink } from "./query-result-last-link.model";
import { ApiExtraModels } from "@nestjs/swagger";

@ApiExtraModels(QueryResultLinks)
export class QueryResultLinks {
    first: string | null;
    prev: string | null;
    next: string | null;
    last?: QueryResultLastLink;
}
