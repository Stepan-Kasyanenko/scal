import { NgModule } from '@angular/core';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [LoginService, AuthGuard]
})
export class CoreModule {
}
