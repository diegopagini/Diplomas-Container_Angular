import { Component } from '@angular/core';
import { DIPLOMAS } from 'src/assets/source';

import { Diploma } from '../models/diploma.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  diplomas: Diploma[] = JSON.parse(JSON.stringify(DIPLOMAS));
  diplomasCopy = JSON.parse(JSON.stringify(DIPLOMAS));

  onSearch(search: string): void {
    if (search?.length > 0) {
      this.diplomas = this.diplomas.filter((diploma: Diploma) =>
        diploma.name
          .toLocaleLowerCase()
          .trim()
          .includes(search.toLowerCase().trim())
      );
    } else {
      this.diplomas = this.diplomasCopy;
    }
  }
}
