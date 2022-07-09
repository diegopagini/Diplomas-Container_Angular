import { Component } from '@angular/core';
import { DIPLOMAS } from 'src/assets/source';

import { Diploma } from '../models/diploma.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  diplomas: Diploma[] = DIPLOMAS;
}
