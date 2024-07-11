import { Module } from '@nestjs/common';
import { BbbService } from './bbb.service';
import { BbbController } from './bbb.controller';
// import { AaaModule } from 'src/aaa/aaa.module';

// 通过imports引入其他模块，实现了在BbbModule中使用AaaModule中的服务

@Module({
  // imports: [AaaModule], 如果AaaModule中是全局导出的，那么这里就不需要引入了
  controllers: [BbbController], // 通过controllers引入控制器，
  providers: [BbbService], //通过providers引入服务
})
export class BbbModule {}
