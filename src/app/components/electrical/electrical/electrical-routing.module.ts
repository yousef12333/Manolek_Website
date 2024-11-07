import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectricalComponent } from '../electrical.component';

const routes: Routes = [{
  path:'',
  component:ElectricalComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectricalRoutingModule { }
