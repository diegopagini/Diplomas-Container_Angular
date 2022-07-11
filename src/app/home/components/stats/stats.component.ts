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

  get longestCourse(): number {
    const hours = this.diplomas.map((diploma: Diploma) => diploma.hours);
    const max = Math.max(...hours);
    return max;
  }

  get shorterCourse(): number {
    const hours = this.diplomas.map((diploma: Diploma) => diploma.hours);
    const min = Math.min(...hours);
    return min;
  }
}
