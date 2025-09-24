import { Module } from '@nestjs/common';
import { TrumpmixService } from './trumpmix.service';
import { TrumpmixController } from './trumpmix.controller';

@Module({
  controllers: [TrumpmixController],
  providers: [TrumpmixService],
})
export class TrumpmixModule {}
