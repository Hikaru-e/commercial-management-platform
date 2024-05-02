import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card'; // Importez MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';

import { ClientComponent } from './client/client.component';
import { MatListModule } from '@angular/material/list';
import { HelloComponent } from './home/hello/hello.component';
import { FootrComponent } from './footr/footr.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditClientDialogComponentComponent } from './client/edit-client-dialog-component/edit-client-dialog-component.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HelloComponent,
    ClientComponent,
    FootrComponent,
    EditClientDialogComponentComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule, // Ajoutez MatCardModule aux imports
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
     MatListModule 
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
