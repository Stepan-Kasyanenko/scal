import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ ProgressBarComponent, CardComponent, ButtonComponent, InputComponent, TooltipComponent],
  exports: [
    CommonModule,
    RouterModule,
    ProgressBarComponent,
    CardComponent,
    ButtonComponent,
    InputComponent,
    TooltipComponent
  ]
})
export class SharedModule {
}
