import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { NotasService } from '../services/notas.service';
import { CreateNotaDto, UpdateNotaDto } from '../dtos/nota.dto';

@Controller('notas')
export class NotasController {
  constructor(private notasService: NotasService) {}

  @Get()
  get() {
    return this.notasService.getAll();
  }

  @Post()
  create(@Body() body: CreateNotaDto) {
    return this.notasService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateNotaDto) {
    return this.notasService.update(id, body);
  }
}
