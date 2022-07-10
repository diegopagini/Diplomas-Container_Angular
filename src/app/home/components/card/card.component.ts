import { Component, Input } from '@angular/core';
import { Diploma } from 'src/app/models/diploma.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() diploma: Diploma;
}
