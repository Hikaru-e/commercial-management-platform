import { Component, OnInit } from '@angular/core';
import { fournisseurService } from './fournisseur.service';
import { MatDialog } from '@angular/material/dialog';
import { EditFournisseurDialogComponentComponent } from './edit-fournisseur-dialog-component/edit-fournisseur-dialog-component.component';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css'] // 
})

export class FournisseurComponent implements OnInit {
  clients: any[] = []; // Initialiser clients avec une liste vide
  editMode = false;
  editingClientId: number | null = null; // Pour stocker l'ID du client en cours d'édition


  constructor(private fournisseurService: fournisseurService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getClients();
  }


  startEditingClient(clientId: number) {
    console.log('startEditingClient called with client ID:', clientId);
    this.editingClientId = clientId;
    this.openEditClientDialog();
  }

  openEditClientDialog(): void {
    const dialogRef = this.dialog.open(EditFournisseurDialogComponentComponent, {
      width: '400px',
      data: { editingClientId: this.editingClientId }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.editingClientId = null;
    });
  }

  
  cancelEditing() {
    this.editMode = false;
    this.editingClientId = null;
  }


  getClients() {
    this.fournisseurService.getClients().then(response => {
      this.clients = response.data;
    }).catch(error => {
      console.error('Error fetching clients:', error);
    });
  }

  addClient() {
    const newClient = { id: 6, name: 'Client 6' };
    this.fournisseurService.addClient(newClient).then(() => {
      this.getClients();
    }).catch(error => {
      console.error('Error adding client:', error);
    });
  }

  deleteClient(id: number) {
    this.fournisseurService.deleteClient(id).then(() => {
      this.getClients();
    }).catch(error => {
      console.error('Error deleting client:', error);
    });
  }

  updateClient(id: number, newName: string) {
    this.fournisseurService.updateClient(id, newName).then(() => {
      this.getClients();
    }).catch(error => {
      console.error('Error updating client:', error);
    });
  }
}
