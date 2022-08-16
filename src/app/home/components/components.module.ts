import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';
import { SearchComponent } from './search/search.component';
import { StatsComponent } from './stats/stats.component';

const components = [
  ListComponent,
  CardComponent,
  SearchComponent,
  ModalComponent,
  StatsComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule,
    FormsModule,
    ScrollingModule,
  ],
  exports: [...components],
})
export class ComponentsModule {}
