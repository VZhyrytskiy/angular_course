import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FontChangeDirective } from './directives/font-change.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { MaterialModulesModule } from './material-modules/material-modules.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { SpinnerComponent } from './spinner/spinner.component';
@NgModule({
  declarations: [
    HighlightDirective,
    FontChangeDirective,
    OrderByPipe,
    NotFoundComponent,
    AccessDeniedComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModulesModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    MaterialModulesModule,
    FormsModule,
    HighlightDirective,
    FontChangeDirective,
    OrderByPipe,
    NotFoundComponent,
    RouterModule,
    SpinnerComponent
  ]
})
export class SharedModule { }
