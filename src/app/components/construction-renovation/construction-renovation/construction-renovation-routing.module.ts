import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructionRenovationComponent } from '../construction-renovation.component';

const routes: Routes = [{
  path:'',
  component:ConstructionRenovationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstructionRenovationRoutingModule { }
