import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonconRoutingModule } from './jsoncon-routing.module';
import { HomeComponent } from './main/home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    JsonconRoutingModule,
    FormsModule
  ]
})
export class JsonconModule { }
