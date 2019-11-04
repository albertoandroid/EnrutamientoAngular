import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ListTaskComponent } from './task/list-task/list-task.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import {MatToolbarModule} from '@angular/material/toolbar';

const appRoutes: Routes = [
  {path: 'list', component: ListTaskComponent},
  {path: 'create', component: CreateTaskComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
