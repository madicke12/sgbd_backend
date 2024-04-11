import { IsNotEmpty, IsString } from 'class-validator';

export class AvisDto {
  @IsString()
  @IsNotEmpty()
  contenu: string;
  @IsString()
  @IsNotEmpty()
  matiere: string;
}
