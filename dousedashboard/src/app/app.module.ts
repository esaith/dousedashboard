import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { NavComponent } from './nav/nav.component';
import { BusinessComponent } from './business/business.component';
import { BusinessService } from './entities/business.service';
import { BlogComponent } from './blog/blog.component';
import { SaveDialogComponent } from './shared/save-dialog/save-dialog.component';

const routes: Routes = [
  { path: 'business/:id', component: BusinessComponent },
  { path: 'services/:id', component: ServicesComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: '', component: ServicesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    NavComponent,
    BusinessComponent,
    BlogComponent,
    SaveDialogComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    DragDropModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    SaveDialogComponent
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
