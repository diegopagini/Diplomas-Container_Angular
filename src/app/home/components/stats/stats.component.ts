import { Component, Input } from '@angular/core';
import { Diploma } from 'src/app/models/diploma.interface';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  @Input() diplomas: Diploma[];

  get hours(): number {
    return this.diplomas.reduce((acc, current) => (acc += current.hours), 0);
  }
}
