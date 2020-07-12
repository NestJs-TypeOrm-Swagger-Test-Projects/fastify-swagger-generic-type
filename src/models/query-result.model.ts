import { QueryResultLinks } from "./query-result-links.model";

export class QueryResult<T> {
	content: T[];
	links: QueryResultLinks;
}


