import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsateurService } from '../utilsateur.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  users: any[] = [];
  baseUrl = 'http://localhost:8080/utilisateurs';
  newUser: any = {
    idUser:0,
    nomUser: '',
    prenomUser: '',
    emailUser: '',
    passwordUser: '',
    roleUser: '',};
 constructor(private httpClient: HttpClient,private utilisateurService: UtilsateurService) { }
  
 addUser() {
  this.utilisateurService.addUser(this.newUser)
    .subscribe(
      response => {
        console.log('User added successfully:', response);
      },
      error => {
        console.error('Error adding user:', error);
      }
    );
}
  
private resetForm(): void {
  // Reset the form and all inputs
  this.newUser = { 
    idUser:0,
    nomUser: '',
    prenomUser: '',
    emailUser: '',
    passwordUser: '',
    roleUser: '',
  };

}}
