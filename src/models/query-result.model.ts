import { QueryResultLinks } from "./query-result-links.model";
import { ApiProperty } from "@nestjs/swagger";

export class QueryResult<T> {
	content: T[];
	@ApiProperty({ type: () => QueryResultLinks })
	links: QueryResultLinks;
}


