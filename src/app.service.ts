import { Injectable } from '@nestjs/common';

// @Injectable() 代表这个class可以被注入到其他地方使用，nestjs会自动帮我们实例化这个class
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
