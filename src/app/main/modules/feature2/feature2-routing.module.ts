import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature2Component } from 'app/main/modules/feature2/components/feature2/feature2.component';

const routes: Routes = [ {
  path: '',
  component: Feature2Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }
