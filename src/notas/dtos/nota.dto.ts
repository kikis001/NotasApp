import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

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
  readonly userId: string;
}

export class UpdateNotaDto extends PartialType(CreateNotaDto) {}
