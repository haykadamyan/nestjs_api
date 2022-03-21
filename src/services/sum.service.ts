import { Injectable } from '@nestjs/common';

@Injectable()
export class SumService {
  getSum(a: string, b: string): number {
    return +a + +b;
  }
}
