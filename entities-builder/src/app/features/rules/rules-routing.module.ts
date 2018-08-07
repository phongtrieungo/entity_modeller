import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesComponent } from './rules.component';
import { RulesHomeComponent } from './rules-home/rules-home.component';

const routes: Routes = [
  {
    path: '',
    component: RulesComponent,
    children: [
      { path: '', redirectTo: '/rules/home', pathMatch: 'full'},
      { path: 'home', component: RulesHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesRoutingModule { }
