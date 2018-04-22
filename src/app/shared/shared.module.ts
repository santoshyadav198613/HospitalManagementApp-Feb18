import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AmountPipe } from '../custom/amount.pipe';
import { HoverDirective } from '../directives/hover/hover.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule, AmountPipe, HoverDirective],
  declarations: [AmountPipe, HoverDirective]
})
export class SharedModule { }
