import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntitiesComponent } from './entities.component';
import { EntitiesHomeComponent } from './entities-home/entities-home.component';

const routes: Routes = [
  {
    path: '',
    component: EntitiesComponent,
    children: [
      { path: '', redirectTo: '/entities/home', pathMatch: 'full'},
      { path: 'home', component: EntitiesHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule { }
