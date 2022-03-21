import { Module } from '@nestjs/common';
import { ConfigModule  } from '@nestjs/config'

// Controllers
import { SumController } from './controllers/sum.controller';

// Services
import { SumService } from 'src/services/sum.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [SumController],
  providers: [SumService],
})
export class AppModule {}
