import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature1Component } from './components/feature1/feature1.component';

const routes: Routes = [
  {
    path: '',
    component: Feature1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule {
}
