import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from 'app/core/guards/auth.guard';
import { LoginComponent } from 'app/main/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'feature1',
    loadChildren: 'app/main/modules/feature1/feature1.module#Feature1Module',
    canActivate: [AuthGuard]
  },
  {
    path: 'feature2',
    loadChildren: 'app/main/modules/feature2/feature2.module#Feature2Module',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
