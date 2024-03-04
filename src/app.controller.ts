import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ParseIntPipe } from './pipes/parse-int/parse-int.pipe';
// import { HttpExceptionFilter } from './filters/http-exception/http-exception.filter';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('HANDSOME_MAN')
    private readonly handsomeMan:Record<string, string> = {name: ''},
    ) {
      // console.log('Export Custom Provider(Optional): ', this.handsomeMan);
    }

  @Get()
  // @UseFilters(HttpExceptionFilter)
  getHello(): string {
    // const status = HttpStatus.BAD_REQUEST;
    // throw new HttpException('出錯囉!', status);
    // throw new BadRequestException('出錯囉!');
    return this.appService.getHello(this.handsomeMan.name);
  }

  @Get(':id')
  getUser(
    @Param('id', ParseIntPipe) id:number){
    return this.appService.getUser(id);
  }
}
