import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HomeComponent,
    DataComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'shop', component: ShopComponent},
      {path: 'Datenschutz', component: DataComponent}
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
