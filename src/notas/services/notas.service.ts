import { Injectable } from '@nestjs/common';
import { CreateNotaDto, UpdateNotaDto } from '../dtos/nota.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Nota } from '../entities/nota.entity';
import { Model, Types } from 'mongoose';

@Injectable()
export class NotasService {
  constructor(@InjectModel(Nota.name) private notaModel: Model<Nota>) {}

  async getAll(id: string) {
    return await this.notaModel.find({ userId: id }).populate('notaI').exec();
  }

  create(body: CreateNotaDto) {
    const newNota = new this.notaModel(body);
    return newNota.save();
  }

  async update(id: string, changes: UpdateNotaDto) {
    const updatedNota = await this.notaModel.findByIdAndUpdate(
      id,
      { $set: changes },
      { new: true },
    );
    return updatedNota;
  }

  async addSubNota(
    id: string,
    addSubNotaDto: { notaI: (string | Types.ObjectId)[] },
  ) {
    const updatedNota = await this.notaModel.findByIdAndUpdate(
      id,
      { $push: { notaI: { $each: addSubNotaDto.notaI } } },
      { new: true },
    );
    return updatedNota;
  }

  async deleteSubNota(
    id: string,
    deleteSubNotaDto: { notaI: (string | Types.ObjectId)[] },
  ) {
    const updatedNota = await this.notaModel.findByIdAndUpdate(
      id,
      { $pull: { notaI: { $in: deleteSubNotaDto.notaI } } },
      { new: true },
    );
    return updatedNota;
  }

  async delete(id: string) {
    return await this.notaModel.findByIdAndDelete(id);
  }
}
