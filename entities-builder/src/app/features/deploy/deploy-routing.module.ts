import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeployComponent } from './deploy.component';
import { DeployHomeComponent } from './deploy-home/deploy-home.component';

const routes: Routes = [
  {
    path: '',
    component: DeployComponent,
    children: [
      { path: '', redirectTo: '/deploy/home', pathMatch: 'full'},
      { path: 'home', component: DeployHomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeployRoutingModule { }
