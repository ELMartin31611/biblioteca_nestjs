import { IsDate, IsNumber, IsString, IsBoolean } from 'class-validator';

export class UpdateBibliotecaDto {
  
    @IsString()
    isbn: string;
  
    @IsString()
    titulo: string;
  
    @IsString()
    autor: string;
  
    @IsString()
    editorial: string;
  
    @IsDate()
    anio_publicacion: Date;
  
    @IsString()
    categoria: string;
  
    @IsNumber()
    num_paginas: number;
  
    @IsString()
    ubicacion: string;
  
    @IsString()
    estado: string;
  
    @IsNumber()
    copias_dispobles: number
   

}
