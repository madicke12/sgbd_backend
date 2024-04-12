import { IsNotEmpty, IsString } from 'class-validator';

export class PvDto {
  @IsString()
  @IsNotEmpty()
  lieu: string;
  @IsString()
  @IsNotEmpty()
  objet: string;
  @IsString()
  @IsNotEmpty()
  decision: string;
  @IsString()
  @IsNotEmpty()
  date: string;
  @IsString()
  @IsNotEmpty()
  contenu: string;
  @IsString()
  @IsNotEmpty()
  auteur: string;
}
