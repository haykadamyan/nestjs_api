import { Controller, Post, Body } from '@nestjs/common'
import { SumService } from 'src/services/sum.service'
import { PostDataProps } from 'src/models/sum.model';

@Controller('sum')
export class SumController {
  constructor(private readonly sumService: SumService) {}

  @Post()
  getSum(@Body() postData: PostDataProps): number {
    const { a, b } = postData;

    return this.sumService.getSum(a, b);
  };
}
