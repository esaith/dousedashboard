import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { NavComponent } from './nav/nav.component';
import { BusinessComponent } from './business/business.component';
import { BusinessService } from './entities/business.service';

const routes: Routes = [
  { path: 'business/:id', component: BusinessComponent },
  { path: 'services/:id', component: ServicesComponent },
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
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
