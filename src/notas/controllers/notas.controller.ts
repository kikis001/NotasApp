import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  async update(@Param('id') id: string, @Body() body: UpdateNotaDto) {
    return await this.notasService.update(id, body);
  }

  @Put(':id/addSubNota')
  async addSubNota(@Param('id') id: string, @Body() body: UpdateNotaDto) {
    return await this.notasService.addSubNota(id, body);
  }

  @Put(':id/deleteSubNota')
  async deleteSubNota(@Param('id') id: string, @Body() body: UpdateNotaDto) {
    return await this.notasService.deleteSubNota(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.notasService.delete(id);
  }
}
