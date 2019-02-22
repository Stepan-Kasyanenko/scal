import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  declarations: [MainComponent, LoginComponent]
})
export class MainModule { }
