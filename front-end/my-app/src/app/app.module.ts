import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card'; // Importez MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
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

import { FootrComponent } from './footr/footr.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditClientDialogComponentComponent } from './client/edit-client-dialog-component/edit-client-dialog-component.component';

import { BaseChartDirective } from 'ng2-charts';

import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { EditFournisseurDialogComponentComponent } from './fournisseur/edit-fournisseur-dialog-component/edit-fournisseur-dialog-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CommonModule } from '@angular/common'; // Importez CommonModule
import { HomePageComponent } from './home-page/home-page.component';

import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { BondachatComponent } from './bondachat/bondachat.component';
import { FactureComponent } from './facture/facture.component';
import { MatTableModule } from '@angular/material/table';
import { HistoriqueAchatsDialogComponent } from './fournisseur/historique-achats-dialog/historique-achats-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
 
    ClientComponent,
    FootrComponent,
    EditFournisseurDialogComponentComponent,
    HomePageComponent,
    FournisseurComponent,
    EditClientDialogComponentComponent,
    BondachatComponent,
    FournisseurComponent,
    FactureComponent,
    HistoriqueAchatsDialogComponent
   
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule, // Ajoutez MatCardModule aux imports
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
     MatListModule ,
     BaseChartDirective,
     CommonModule,
     HttpClientModule,
     BrowserAnimationsModule
   
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  bootstrap: [AppComponent],

})
export class AppModule { }
