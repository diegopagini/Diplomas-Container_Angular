import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';
import { SearchComponent } from './search/search.component';

const components = [
  ListComponent,
  CardComponent,
  SearchComponent,
  ModalComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MaterialModule, PipesModule, FormsModule],
  exports: [...components],
})
export class ComponentsModule {}
