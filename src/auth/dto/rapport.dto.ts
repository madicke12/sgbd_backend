import { IsString, IsNotEmpty } from 'class-validator';

export class RapportDto {
  @IsString()
  @IsNotEmpty()
  contenu: string;
}
