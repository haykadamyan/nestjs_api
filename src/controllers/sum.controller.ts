import { Controller, Get, Param, ValidationPipe } from '@nestjs/common'
import { SumService } from 'src/services/sum.service'
import { SumParams } from 'src/models/sum.model';

@Controller('sum')
export class SumController {
  constructor(private readonly sumService: SumService) {}

  @Get('/:a/:b')
  getSum(@Param() params: SumParams): number {
    const { a, b } = params;

    return this.sumService.getSum(a, b);
  };
}
