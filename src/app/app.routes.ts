
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:'home',loadComponent:()=>import('./components/home/home.component').then(c=>c.HomeComponent)},
  {path:'accounts',loadComponent:()=>import('./components/accounts/accounts.component').then(c=>c.AccountsComponent)},
  {path:'corporate-data',loadComponent:()=>import('./components/corporate-data/corporate-data.component').then(c=>c.CorporateDataComponent)},
  {path:'combolist-data',loadComponent:()=>import('./components/combolist-data/combolist-data.component').then(c=>c.CombolistDataComponent)},
  {path:'tables',loadComponent:()=>import('./components/tables/tables.component').then(c=>c.TablesComponent)},
  {path:'online-courses',loadComponent:()=>import('./components/online-courses/online-courses.component').then(c=>c.OnlineCoursesComponent)},

];
