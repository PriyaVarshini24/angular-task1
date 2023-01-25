import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildaComponent } from './childa/childa.component';

const routes: Routes = [
  {
    path:'childa',
    component:ChildaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
