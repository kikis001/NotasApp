import { Test, TestingModule } from '@nestjs/testing';
import { NotasController } from './notas.controller';

describe('NotasController', () => {
  let controller: NotasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotasController],
    }).compile();

    controller = module.get<NotasController>(NotasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
