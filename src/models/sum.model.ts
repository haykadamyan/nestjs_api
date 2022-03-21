import { IsNumberString } from 'class-validator';

export class SumParams {
    @IsNumberString()
    a: string;

    @IsNumberString()
    b: string;
}
