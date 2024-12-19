import { Module } from '@nestjs/common';
import { NotasController } from './controllers/notas.controller';
import { NotasService } from './services/notas.service';

@Module({
  controllers: [NotasController],
  providers: [NotasService],
})
export class NotasModule {}
