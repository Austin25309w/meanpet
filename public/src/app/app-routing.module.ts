import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { NewComponent } from './new/new.component'
import { DetailComponent } from './detail/detail.component'
import { UpdateComponent } from './update/update.component'

const routes: Routes = [
  { path:"pets", component: HomeComponent},
  { path:"pets/new", component: NewComponent},
  { path:"pets/detail/:id", component: DetailComponent},
  { path:"pets/update/:id", component: UpdateComponent},
  
  // { path}
  { path: '', pathMatch: 'full', redirectTo: '/pets'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
