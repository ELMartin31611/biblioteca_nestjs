import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { biblioteca } from './biblioteca.entity';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';

@Injectable()
export class BibliotecaService {
  constructor(
    @InjectRepository(biblioteca)
    private readonly BibliotecaRepository: Repository<biblioteca>,
  ) {}

  create(createBibliotecaDto: CreateBibliotecaDto) {
    const Biblioteca = this.BibliotecaRepository.create(createBibliotecaDto);
    return this.BibliotecaRepository.save(Biblioteca);
  }

  findAll() {
    return this.BibliotecaRepository.find();
  }

  findOne(id: string) {
    return this.BibliotecaRepository.findOne({ where: { id } });
  }

  async update(id: string, updateBibliotecaDto: UpdateBibliotecaDto) {
    const Biblioteca = await this.BibliotecaRepository.findOne({ where: { id } });
    if (!Biblioteca) return null;
    Object.assign(Biblioteca, updateBibliotecaDto);
    return this.BibliotecaRepository.save(Biblioteca);
  }

  async remove(id: string) {
    const Biblioteca = await this.BibliotecaRepository.findOne({ where: { id } });
    if (!Biblioteca) return null;
    return this.BibliotecaRepository.remove(Biblioteca);
  }
}
