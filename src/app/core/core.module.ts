import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon'
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule
  ],
  exports: [
    MenuComponent
  ]
})
export class CoreModule { }
