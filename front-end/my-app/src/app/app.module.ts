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
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductsComponent } from './products/products.component';
import { GetproductComponent } from './getproduct/getproduct.component';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FindproductbynameComponent } from './findproductbyname/findproductbyname.component';
import { EditproductComponent } from './getproduct/editproduct/editproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { GetuserComponent } from './getuser/getuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UsersComponent } from './users/users.component';
import { HeadrComponent } from './headr/headr.component';
import { FindusersComponent } from './findusers/findusers.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { HelloComponent } from './home/hello/hello.component';


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
    HistoriqueAchatsDialogComponent,
    AppComponent,
    LoginComponent,
    HelloComponent,
    ClientComponent,
    FootrComponent,
    EditClientDialogComponentComponent,
    ProductsComponent,
    GetproductComponent,
    AddproductComponent,
    FindproductbynameComponent,
    EditproductComponent,
    DeleteproductComponent,
    GetuserComponent,
    AdduserComponent,
    UsersComponent,
    HeadrComponent,
    FindusersComponent,
    HeaderUserComponent,
    LoginComponent,
    AppComponent,
   
  ],
  imports: [
    MatToolbarModule,
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
     BrowserAnimationsModule,
     FormsModule,
     BrowserModule,
     FormsModule,
     AppRoutingModule,
   
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

