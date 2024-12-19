import { Injectable } from '@nestjs/common';
import { CreateNotaDto, UpdateNotaDto } from '../dtos/nota.dto';

@Injectable()
export class NotasService {
  create(body: CreateNotaDto): CreateNotaDto {
    return body;
  }

  update(id: string, changes: UpdateNotaDto): UpdateNotaDto {
    return changes;
  }
}
