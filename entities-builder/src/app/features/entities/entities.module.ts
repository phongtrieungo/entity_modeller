import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import { EntitiesComponent } from './entities.component';
import { EntitiesHomeComponent } from './entities-home/entities-home.component';

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule
  ],
  declarations: [EntitiesComponent, EntitiesHomeComponent]
})
export class EntitiesModule { }
