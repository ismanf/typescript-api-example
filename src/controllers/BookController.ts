import { Body, Get, JsonController, Post, UseBefore, Put } from 'routing-controllers';
import { LoggerMiddleware } from '../middleware/logger';
import * as createJson from '../schemas/book/create.json';
import * as Ajv from 'ajv';

@JsonController('/books')
@UseBefore(LoggerMiddleware)
export class BookController {
  @Get()
  public async getAll(): Promise<any> {
    return 'yehu it works!';
  }

  @Post()
  public async create(@Body() book: any): Promise<any> {
    console.log(book);
    const validate = new Ajv()
      .addFormat('email', /^[\w.+]+@\w+\.\w+$/)
      .compile(createJson);
    const valid = validate(book);
    if (!valid) {
      return validate.errors;
    }
    return 'OK!';
  }

  @Put()
  public async update(@Body() book: any): Promise<any> {
    return 'test';
  }
}
