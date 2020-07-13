import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EntityClass } from './models/entity-class.model';
import { QueryResult } from './models/query-result.model';
import { ApiResponse, getSchemaPath, ApiExtraModels } from '@nestjs/swagger';
import { QueryResultLinks } from './models/query-result-links.model';

@Controller()
@ApiExtraModels(QueryResult, EntityClass)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    schema: {
      allOf: [
        { $ref: getSchemaPath(QueryResult) },
        {
          properties: {
            content: {
              type: 'array',
              items: { 
                $ref: getSchemaPath(EntityClass) 
              }
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
