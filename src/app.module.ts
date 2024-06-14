import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';

// controllers 是控制器，用于处理传入的请求，并返回响应，只能被模块注入
// providers 是提供者，用于创建实例，可以被注入到其他地方使用，也可以注入到控制器中，比如这里的AppService
@Module({
  imports: [PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
