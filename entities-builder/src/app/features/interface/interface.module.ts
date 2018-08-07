import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterfaceRoutingModule } from './interface-routing.module';
import { InterfaceComponent } from './interface.component';
import { InterfaceHomeComponent } from './interface-home/interface-home.component';

@NgModule({
  imports: [
    CommonModule,
    InterfaceRoutingModule
  ],
  declarations: [InterfaceComponent, InterfaceHomeComponent]
})
export class InterfaceModule { }
