import { Injectable } from '@nestjs/common';
import { CreateNotaDto, UpdateNotaDto } from '../dtos/nota.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Nota } from '../entities/nota.entity';
import { Model } from 'mongoose';

@Injectable()
export class NotasService {
  constructor(@InjectModel(Nota.name) private notaModel: Model<Nota>) {}

  async getAll() {
    return await this.notaModel
      .find()
      .populate('notaI')
      .populate('userId')
      .exec();
  }

  create(body: CreateNotaDto) {
    const newNota = new this.notaModel(body);
    return newNota.save();
  }

  async update(id: string, changes: UpdateNotaDto) {
    // if (changes.notaI && Array.isArray(changes.notaI)) {
    //   // Convierte cada ID de string a ObjectId
    //   changes.notaI = changes.notaI.map((id) => new Types.ObjectId(id));
    // }

    const nota = await this.notaModel.findByIdAndUpdate(
      id,
      { $set: changes },
      { new: true },
    );

    return nota;
  }
}
