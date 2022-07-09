import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

const materialModules: MaterialModule[] = [
  MatCardModule,
  MatFormFieldModule,
  MatDialogModule,
  MatDatepickerModule,
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  imports: [CommonModule, materialModules],
  exports: [materialModules],
})
export class MaterialModule {}
