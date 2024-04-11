import { IsString, IsNotEmpty } from 'class-validator';

export class RapportDto {
  @IsString()
  @IsNotEmpty()
  rapport: string;
  @IsString()
  @IsNotEmpty()
  professeur: string;
  @IsString()
  @IsNotEmpty()
  nomRapport: string;
  @IsString()
  @IsNotEmpty()
  matiere: string;
}
