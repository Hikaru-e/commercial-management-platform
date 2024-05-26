import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component'; 
import {GetproductComponent} from './getproduct/getproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FindproductbynameComponent } from './findproductbyname/findproductbyname.component';
import { GetuserComponent } from './getuser/getuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UsersComponent } from './users/users.component';
import { FindusersComponent } from './findusers/findusers.component';
import { LoginComponent } from './login/login.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { FactureComponent } from './facture/facture.component';
import { BondachatComponent } from './bondachat/bondachat.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeadrComponent } from './headr/headr.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'products', component: ProductsComponent }, 
  { path: 'getproduct', component: GetproductComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'findproduct', component: FindproductbynameComponent },
  { path: 'users', component: UsersComponent }, 
  { path: 'getuser', component: GetuserComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'finduser', component: FindusersComponent },
  { path: 'fournisseurs', component: FournisseurComponent },
  { path: 'factures', component: FactureComponent },
  { path: 'Bons', component: BondachatComponent },
  { path: 'Home', component: HomePageComponent },
  { path: 'headr', component: HeadrComponent },
  
  

  // Add more routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
