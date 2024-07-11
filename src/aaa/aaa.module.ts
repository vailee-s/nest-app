import { Global, Module } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';

// // 局部导出AaaService
// @Module({
//   controllers: [AaaController],
//   providers: [AaaService],
//   exports: [AaaService],
// })

// 全局导出AaaService @Global()
@Global()
@Module({
  controllers: [AaaController],
  providers: [AaaService],
  exports: [AaaService],
})
export class AaaModule {}
