import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './connect.component';
import { ConnectHomeComponent } from './connect-home/connect-home.component';

@NgModule({
  imports: [
    CommonModule,
    ConnectRoutingModule
  ],
  declarations: [ConnectComponent, ConnectHomeComponent]
})
export class ConnectModule { }
