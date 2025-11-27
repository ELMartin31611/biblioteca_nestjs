import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';

@Controller('libro')
export class BibliotecaController {
  constructor(private readonly BibliotecaService: BibliotecaService) {}

  @Post()
  create(@Body() createBibliotecaDto: CreateBibliotecaDto) {
    return this.BibliotecaService.create(createBibliotecaDto);
  }

  @Get()
  findAll() {
    return this.BibliotecaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.BibliotecaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBibliotecaDto: UpdateBibliotecaDto) {
    return this.BibliotecaService.update(id, updateBibliotecaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.BibliotecaService.remove(id);
  }
}
