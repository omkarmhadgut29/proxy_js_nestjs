import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { modalObj } from 'utils/constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    // this = modalProxy,
  }
  @Get()
  @Render('index')
  // @Render('Home')
  getHello() {
    // return { message: 'Hello' };
    console.log(modalObj);

    return { message: 'Hello', modalObj };
  }
}
