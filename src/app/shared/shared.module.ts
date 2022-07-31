import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FontChangeDirective } from './directives/font-change.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    FontChangeDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HighlightDirective,
    FontChangeDirective
  ]
})
export class SharedModule { }
