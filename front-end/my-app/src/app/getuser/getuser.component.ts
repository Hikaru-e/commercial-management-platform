import { Component, OnInit } from '@angular/core';
import { UtilsateurService } from '../utilsateur.service';
import { MatDialog } from '@angular/material/dialog';
import { EditproductComponent } from '../getproduct/editproduct/editproduct.component';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrl: './getuser.component.css'
})
  export class GetuserComponent  implements OnInit {
    users: any[] = []; // Initialiser clients avec une liste vide
    editMode = false;
    editingUserId: number | null = null; // Pour stocker l'ID du client en cours d'édition
  
  
    constructor(private utilisateurService: UtilsateurService,
      private dialog: MatDialog
    ) { }
  
    ngOnInit(): void {
      this.getAllUsers();
    }
  
    getAllUsers() {
      this.utilisateurService.getAllUsers().then(response => {
        this.users = response.data;
      }).catch(error => {
        console.error('Error fetching products:', error);
      });
    }
    
    startEditingUser(idUser: number) {
      console.log('startEditingClient called with users ID:', idUser);
      this.editingUserId = idUser;
      this.openEditUserDialog();
    }
    
    
    deleteUser(id: number) {
      this.utilisateurService.deleteUser(id).then(() => {
        this.getAllUsers();
      }).catch(error => {
        console.error('Error deleting client:', error);
      });
    }
  
    openEditUserDialog(): void {
      const dialogRef = this.dialog.open(EditproductComponent, {
        width: '400px',
        data: { editingUserId: this.editingUserId }
      });
  
    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.editingUserId = null;
      });
    }
  
 
    
    cancelEditing() {
      this.editMode = false;
      this.editingUserId = null;
    }
    
  
  }

