import {
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Render,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { data } from 'utils/productsData';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    // this = modalProxy,
  }
  // @Get('index')
  // @Render('index')
  // // @Render('Home')
  // getHello() {
  //   // return { message: 'Hello' };
  //   console.log(modalObj);

  //   return { message: 'Hello', modalObj };
  // }

  @Get()
  @Render('components/index')
  showTable(
    @Res() res: Response,
    @Headers('x-requested-with') xhrHeader: string,
  ) {
    return { message: 'success' };
  }

  @Get('products')
  getTable(
    @Res() res: Response,
    @Headers('x-requested-with') xhrHeader: string,
  ) {
    console.log(data.products.length);
    if (xhrHeader === 'XMLHttpRequest') {
      return res.render(
        'components/ProductsTable',
        { data: data },
        (err, html) => {
          if (err) {
            console.error('Error rendering partial:', err);
            res.status(500).send('Internal Server Error');
          } else {
            res.set('Content-Type', 'text/html');
            res.send(html);
          }
        },
      );

      // return res.render('components/ProductsTable', { data });
    }
    return res.json({ message: 'success', data });
  }

  @Post('products/:id')
  deleteProduct(
    @Param('id') id: string,
    @Res() res: Response,
    @Headers('x-requested-with') xhrHeader: string,
  ) {
    data.products.splice(parseInt(id), 1);
    if (xhrHeader === 'XMLHttpRequest') {
      return res.render(
        'components/ProductsTable',
        { data: data },
        (err, html) => {
          if (err) {
            console.error('Error rendering partial:', err);
            res.status(500).send('Internal Server Error');
          } else {
            res.set('Content-Type', 'text/html');
            res.send(html);
          }
        },
      );

      // return res.render('components/ProductsTable', { data });
    }
    return res.json({ message: 'success', data });
  }
}
