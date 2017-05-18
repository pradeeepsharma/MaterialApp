import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {
  MdToolbarModule, MdButtonModule,
  MdIconModule
} from '@angular/material';

const MD_COMPONENTS = [
  MdToolbarModule, MdButtonModule,
  MdIconModule
];


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ].concat(MD_COMPONENTS),
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
