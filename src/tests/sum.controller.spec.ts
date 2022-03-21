import { ArgumentMetadata, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { SumController } from 'src/controllers/sum.controller';
import { PostDataProps } from 'src/models/sum.model';
import { SumService } from 'src/services/sum.service';

describe('SumController', () => {
  let sumController: SumController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SumController],
      providers: [SumService],
    }).compile();

    sumController = app.get<SumController>(SumController);
  });

  describe('sum', () => {
    let target: ValidationPipe = new ValidationPipe({ transform: true, whitelist: true })
    it('should caluclate sum', () => {
      expect(sumController.getSum({ a: '1', b: '2' })).toBe(3);
    });

    it('should return error message', () => {
      const metadata: ArgumentMetadata = {
        type: 'param',
        metatype: PostDataProps
      }
      target.transform(<PostDataProps>{}, metadata)
        .catch(err => {
          expect(err.getResponse().message).toEqual(["a must be a number string", "b must be a number string"])
        })
    })

    it('should return "a must be a number string"', () => {
        const metadata: ArgumentMetadata = {
          type: 'param',
          metatype: PostDataProps
        }
        target.transform(<PostDataProps>{ a: 'a', b: '5' }, metadata)
          .catch(err => {
            expect(err.getResponse().message).toEqual(["a must be a number string"])
          })
    })

    it('should return "b must be a number string"', () => {
        const metadata: ArgumentMetadata = {
          type: 'param',
          metatype: PostDataProps
        }
        target.transform(<PostDataProps>{ a: '1', b: 'b' }, metadata)
          .catch(err => {
            expect(err.getResponse().message).toEqual(["b must be a number string"])
          })
    })
  });
});
