import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeployRoutingModule } from './deploy-routing.module';
import { DeployComponent } from './deploy.component';
import { DeployHomeComponent } from './deploy-home/deploy-home.component';

@NgModule({
  imports: [
    CommonModule,
    DeployRoutingModule
  ],
  declarations: [DeployComponent, DeployHomeComponent]
})
export class DeployModule { }
