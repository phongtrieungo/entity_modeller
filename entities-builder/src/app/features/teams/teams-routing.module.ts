import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { TeamsHomeComponent } from './teams-home/teams-home.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
    children: [
      { path: '', redirectTo: '/teams/home', pathMatch: 'full'},
      { path: 'home', component: TeamsHomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
