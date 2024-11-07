import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanitaryComponent } from '../sanitary.component';

const routes: Routes = [{
  path:'',
  component:SanitaryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanitaryRoutingModule { }
