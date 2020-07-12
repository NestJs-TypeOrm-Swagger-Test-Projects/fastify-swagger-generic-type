import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EntityClass } from './models/entity-class.model';
import { QueryResult } from './models/query-result.model';
import { ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { QueryResultLinks } from './models/query-result-links.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    schema: {
      allOf: [
        { $ref: getSchemaPath(QueryResult) },   
        { $ref: getSchemaPath(QueryResultLinks) },    
        {
          properties: {
            content: {
              type: 'array',
              items: { 
                $ref: getSchemaPath(EntityClass) 
              }
            },
            filter: {
              type: 'string'
            },
            sort: {
              type: 'string'
            },
            links: { 
              type: 'QueryResultLinks',
            }
          }
        }
      ]          
    }
  })
  getHello(): QueryResult<EntityClass> {
    return null;
  }
}
