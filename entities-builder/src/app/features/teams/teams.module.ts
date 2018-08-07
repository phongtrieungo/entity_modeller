import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamsHomeComponent } from './teams-home/teams-home.component';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule
  ],
  declarations: [TeamsComponent, TeamsHomeComponent]
})
export class TeamsModule { }
