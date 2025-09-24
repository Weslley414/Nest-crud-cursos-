import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TrumpmixModule } from './trumpmix/trumpmix.module';

@Module({
  imports: [CoursesModule, TrumpmixModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
