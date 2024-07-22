import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';
import { DddModule } from './ddd/ddd.module';

// controllers 是控制器，用于处理传入的请求，并返回响应，只能被模块注入
// providers 是提供者，用于创建实例，可以被注入到其他地方使用，也可以注入到控制器中，比如这里的AppService
@Module({
  imports: [PersonModule, AaaModule, BbbModule, CccModule, DddModule],
  controllers: [AppController],
  // providers: [AppService],
  // 也可以这样写
  providers: [
    {
      provide: AppService, // 指定token，通过useClass指定实现类， AppService名字而已，可以随便取
      useClass: AppService,
    },
    {
      provide: 'app_service', // 指定token，通过useClass指定实现类， AppService名字而已，可以随便取
      useClass: AppService,
    },
    // 直接指定一个值，让ioc容器来注入
    {
      provide: 'person',
      useValue: { name: '张三', age: 18 },
    },
    {
      provide: 'person2',
      useFactory: (): { name: string; age: number } => {
        return { name: '李四', age: 20 };
      },
    },
  ],
})
export class AppModule {}
