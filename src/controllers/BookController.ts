import { Body, Get, JsonController, Post, UseBefore } from 'routing-controllers';
import { LoggerMiddleware } from '../middleware/logger';
import { ValidatorMiddleware } from '../middleware/validator';

@JsonController('/books')
@UseBefore(LoggerMiddleware)
export class BookController {
  @Get()
  public async getAll(): Promise<any> {
    return 'yehu it works!';
  }

  @Post()
  @UseBefore(ValidatorMiddleware)
  public async create(@Body() book: any): Promise<any> {
    return 'test';
  }
}
