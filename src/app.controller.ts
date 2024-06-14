// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller() 代表这个class可以被注入到其他地方使用，及AppController的构造器参数依赖了AppService
@Controller()
export class AppController {
  // 代表在实例化AppController的时候，会自动实例化AppService，并且注入到AppController的构造器参数中，
  // 构造注入
  constructor(private readonly appService: AppService) {}

  // 属性注入
  // @Inject(AppService)
  // private AppService: AppService;
  // 等价于constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    debugger;
    return this.appService.getHello();
  }
}
