import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentilationComponent } from '../ventilation.component';

const routes: Routes = [{
  path:'',
  component:VentilationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentilationRoutingModule { }
