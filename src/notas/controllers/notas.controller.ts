import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { NotasService } from '../services/notas.service';
import { CreateNotaDto, UpdateNotaDto } from '../dtos/nota.dto';

@Controller('notas')
export class NotasController {
  constructor(private notasService: NotasService) {}

  @Get()
  get(): string {
    return 'Hello from notas controller';
  }

  @Post()
  create(@Body() body: CreateNotaDto): CreateNotaDto {
    return this.notasService.create(body);
  }

  @Put('id')
  update(@Param(':id') id: string, @Body() body: UpdateNotaDto): UpdateNotaDto {
    return this.notasService.update(id, body);
  }
}
