import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {DataTableModule,SharedModule,TabMenuModule,ButtonModule,InputTextModule,TabViewModule,PanelModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import {LoginComponent} from './loginview/login.component';
import {GridComponent} from './gridview/grid.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,GridComponent
  ],
  imports: [
 AppRoutingModule,BrowserModule,DataTableModule,BrowserAnimationsModule,TabMenuModule,ButtonModule,InputTextModule,TabViewModule,PanelModule, FormsModule,ReactiveFormsModule,HttpModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
