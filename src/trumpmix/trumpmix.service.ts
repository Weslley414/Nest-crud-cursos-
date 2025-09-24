import { Injectable } from '@nestjs/common';
import { CreateTrumpmixDto } from './dto/create-trumpmix.dto';
import { UpdateTrumpmixDto } from './dto/update-trumpmix.dto';

@Injectable()
export class TrumpmixService {
  create(createTrumpmixDto: CreateTrumpmixDto) {
    return 'This action adds a new trumpmix';
  }

  findAll() {
    return `This action returns all trumpmix`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trumpmix`;
  }

  update(id: number, updateTrumpmixDto: UpdateTrumpmixDto) {
    return `This action updates a #${id} trumpmix`;
  }

  remove(id: number) {
    return `This action removes a #${id} trumpmix`;
  }
}
