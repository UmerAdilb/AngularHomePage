import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { SidebarComponent } from './sidebar/sidebar.component';
import {CardModule} from 'primeng/card';

import {SidebarModule} from 'primeng/sidebar';
import { DividerComponent } from './divider/divider.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DividerComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
ButtonModule,
InputTextModule,
SidebarModule,
CardModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
