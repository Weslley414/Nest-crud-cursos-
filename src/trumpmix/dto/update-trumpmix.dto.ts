import { PartialType } from '@nestjs/swagger';
import { CreateTrumpmixDto } from './create-trumpmix.dto';

export class UpdateTrumpmixDto extends PartialType(CreateTrumpmixDto) {}
