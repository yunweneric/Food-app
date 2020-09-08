import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToCFAPipe } from './to-cfa.pipe';



@NgModule({
  declarations: [ToCFAPipe],
  exports:[ToCFAPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
