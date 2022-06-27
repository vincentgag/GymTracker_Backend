import { Controller } from '@nestjs/common';
import { ExercicesService } from './exercices.service';

@Controller('exercices')
export class ExercicesController {
  constructor(private readonly exerciceService: ExercicesService) {}
}
