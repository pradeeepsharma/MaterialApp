import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {HeaderComponent} from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import {RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import {RecepieItemComponent } from './recepies/recepie-list/recepie-item/recepie-item.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [ 
    AppComponent,
    
    HeaderComponent,
    RecepiesComponent,
    RecepieDetailComponent,
    RecepieListComponent,
    RecepieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    
    
=======
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
>>>>>>> 66184cebd8022cfa2694211c111a3c7f1dfcb409
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpModule
  ],
=======
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ].concat(MD_COMPONENTS),
>>>>>>> 66184cebd8022cfa2694211c111a3c7f1dfcb409
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
