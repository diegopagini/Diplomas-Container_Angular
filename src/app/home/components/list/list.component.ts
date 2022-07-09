import { Component, Input } from '@angular/core';
import { Diploma } from 'src/app/models/diploma.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() diplomas: Diploma[];
}
