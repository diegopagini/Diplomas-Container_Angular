import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [SafePipe],
  imports: [CommonModule],
  exports: [SafePipe],
})
export class PipesModule {}
