import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectComponent } from './connect.component';
import { ConnectHomeComponent } from './connect-home/connect-home.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectComponent,
    children: [
      { path: '', redirectTo: '/connect/home', pathMatch: 'full' },
      { path: 'home', component: ConnectHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule { }
