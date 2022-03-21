import { IsNumberString } from 'class-validator';

export class PostDataProps {
    @IsNumberString()
    a: string;

    @IsNumberString()
    b: string;
}
