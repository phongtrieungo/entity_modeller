import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterfaceComponent } from './interface.component';
import { InterfaceHomeComponent } from './interface-home/interface-home.component';

const routes: Routes = [
  {
    path: '',
    component: InterfaceComponent,
    children: [
      { path: '', redirectTo: '/interface/home', pathMatch: 'full'},
      { path: 'home', component: InterfaceHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfaceRoutingModule { }
