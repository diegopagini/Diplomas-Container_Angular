import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Diploma } from 'src/app/models/diploma.interface';

import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() diploma: Diploma;

  constructor(private dialog: MatDialog) {}

  onClick(): void {
    this.dialog.open(ModalComponent, {
      data: this.diploma,
    });
  }
}
