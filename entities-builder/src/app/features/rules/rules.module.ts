import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { RulesHomeComponent } from './rules-home/rules-home.component';

@NgModule({
  imports: [
    CommonModule,
    RulesRoutingModule
  ],
  declarations: [RulesComponent, RulesHomeComponent]
})
export class RulesModule { }
