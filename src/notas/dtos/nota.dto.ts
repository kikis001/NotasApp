import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateNotaDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly body: string;

  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @IsString()
  @IsNotEmpty()
  readonly color: string;

  @IsMongoId()
  @IsNotEmpty()
  readonly userId: Types.ObjectId;
}

export class UpdateNotaDto extends PartialType(CreateNotaDto) {
  @IsMongoId({ each: true })
  notaI: (string | Types.ObjectId)[];
}
