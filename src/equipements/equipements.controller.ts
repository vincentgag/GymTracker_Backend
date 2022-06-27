import { Controller } from '@nestjs/common';
import { EquipementsService } from './equipements.service';

@Controller('equipements')
export class EquipementsController {
  constructor(private readonly equipementsService: EquipementsService) {}
}
