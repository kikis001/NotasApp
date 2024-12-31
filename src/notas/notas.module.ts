import { Module } from '@nestjs/common';
import { NotasController } from './controllers/notas.controller';
import { NotasService } from './services/notas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Nota, NotaSchema } from './entities/nota.entity';

@Module({
  controllers: [NotasController],
  providers: [NotasService],
  imports: [
    MongooseModule.forFeature([{ name: Nota.name, schema: NotaSchema }]),
  ],
})
export class NotasModule {}
