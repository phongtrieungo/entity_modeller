import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowComponent } from './workflow.component';
import { WorkflowHomeComponent } from './workflow-home/workflow-home.component';

@NgModule({
  imports: [
    CommonModule,
    WorkflowRoutingModule
  ],
  declarations: [WorkflowComponent, WorkflowHomeComponent]
})
export class WorkflowModule { }
