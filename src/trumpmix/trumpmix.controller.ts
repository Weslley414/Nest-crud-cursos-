import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrumpmixService } from './trumpmix.service';
import { CreateTrumpmixDto } from './dto/create-trumpmix.dto';
import { UpdateTrumpmixDto } from './dto/update-trumpmix.dto';

@Controller('trumpmix')
export class TrumpmixController {
  constructor(private readonly trumpmixService: TrumpmixService) {}

  @Post()
  create(@Body() createTrumpmixDto: CreateTrumpmixDto) {
    return this.trumpmixService.create(createTrumpmixDto);
  }

  @Get()
  findAll() {
    return this.trumpmixService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trumpmixService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrumpmixDto: UpdateTrumpmixDto) {
    return this.trumpmixService.update(+id, updateTrumpmixDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trumpmixService.remove(+id);
  }
}
