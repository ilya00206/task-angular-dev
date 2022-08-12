import { Component, Input } from '@angular/core';
import { Animal } from 'src/app/core/models';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
})
export class AnimalItemComponent {
  @Input() animal: Animal;
}
