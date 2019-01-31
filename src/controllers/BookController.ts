import { JsonController, Get } from 'routing-controllers';

@JsonController('/books')
export class BookController {
  @Get()
  async getBooks(): Promise<any> {
    return 'yehu it works!';
  }
}
