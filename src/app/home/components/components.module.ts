import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent, CardComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
