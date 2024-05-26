import { Component } from '@angular/core';
import { User } from '../user';
import { UtilsateurService } from '../utilsateur.service';

@Component({
  selector: 'app-findusers',
  templateUrl: './findusers.component.html',
  styleUrl: './findusers.component.css'
})
export class FindusersComponent {
  searchResults: User | any; 
  UserName: string = ''; 

  constructor(private utilisateurService: UtilsateurService) { }

  searchUserByName() {
    // Check if productName is not empty
    if (this.UserName.trim() !== '') {
      this.utilisateurService.searchUserByName(this.UserName.trim())
        .then(response => {
          this.searchResults = response.data;
          console.log("its working")
            console.log("khawi")
        
            console.log(this.searchResults)
        })
        .catch(error => {
          console.error('Error searching user:', error);
          // Optionally, handle error and display a message to the user
        });
    } else {
      // Handle case where productName is empty
      console.warn('User name is empty.');
      // Optionally, display a message to the user indicating that the product name is required
    }
  }
}
