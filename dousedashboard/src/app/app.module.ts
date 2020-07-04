import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesComponent } from './services/services.component';
import { NavComponent } from './nav/nav.component';
import { BusinessComponent } from './business/business.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'business', component: BusinessComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', component: ServicesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    NavComponent,
    BusinessComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
