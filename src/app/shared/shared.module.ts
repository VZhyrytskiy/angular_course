import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FontChangeDirective } from './directives/font-change.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HighlightDirective,
    FontChangeDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HighlightDirective,
    FontChangeDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
