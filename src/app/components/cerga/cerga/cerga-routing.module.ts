import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CergaComponent } from '../cerga.component';

const routes: Routes = [{
  path:'',
  component:CergaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CergaRoutingModule { }
