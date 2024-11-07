import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeatingComponent } from '../heating.component';

const routes: Routes = [{
  path:'',
  component:HeatingComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeatingRoutingModule { }
