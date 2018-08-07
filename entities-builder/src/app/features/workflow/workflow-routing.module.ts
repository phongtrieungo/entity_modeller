import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkflowComponent } from './workflow.component';
import { WorkflowHomeComponent } from './workflow-home/workflow-home.component';

const routes: Routes = [
  {
    path: '',
    component: WorkflowComponent,
    children: [
      { path: '', redirectTo: '/workflow/home', pathMatch: 'full'},
      { path: 'home', component: WorkflowHomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule { }
