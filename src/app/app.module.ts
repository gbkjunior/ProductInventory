import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {HttpModule} from '@angular/http';

import {environment} from '../environments/environment';
import { AppComponent } from './app.component';
import {ProdInvService} from './service/prod-inv.service';
import { ProductSearchComponent } from './components/product-search/product-search.component';

const API_URL = environment.apiUrl;
/*
var routes = [
  
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
    
  },
  {
    path: 'products/:name',
    component: ProductSearchComponent
  },
  {
    path: 'products',
    component: ProductSearchComponent,
    useAsDefault: true
  },
  {
    path: 'getAllInventory',
    component: ProductSearchComponent
  }
];
  
*/

@NgModule({
  declarations: [
    AppComponent,
    ProductSearchComponent,
    
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, HttpModule
  ],
  providers: [ProdInvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
