import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { MatDialog } from '@angular/material/dialog';
import { EditClientDialogComponentComponent } from './edit-client-dialog-component/edit-client-dialog-component.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: any[] = []; // Initialiser clients avec une liste vide
  editMode = false;
  editingClientId: number | null = null; // Pour stocker l'ID du client en cours d'édition


  constructor(private clientService: ClientService,
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
    const dialogRef = this.dialog.open(EditClientDialogComponentComponent, {
      width: '400px',
      data: { editingClientId: this.editingClientId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getClients(); // Recharger les clients après la fermeture du dialogue
      }
      this.editingClientId = null;
    });
  }
  

  
  cancelEditing() {
    this.editMode = false;
    this.editingClientId = null;
  }


  getClients() {
    this.clientService.getClients().then(response => {
      this.clients = response.data;
    }).catch(error => {
      console.error('Error fetching clients:', error);
    });
  }

  addClient() {
    const newClient = { id: 6, name: 'Client 6' };
    this.clientService.addClient(newClient).then(() => {
      this.getClients();
    }).catch(error => {
      console.error('Error adding client:', error);
    });
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id).then(() => {
      this.getClients();
    }).catch(error => {
      console.error('Error deleting client:', error);
    });
  }

  updateClient(id: number, newName: string) {
    this.clientService.updateClient(id, newName).then(() => {
      this.getClients();
    }).catch(error => {
      console.error('Error updating client:', error);
    });
  }
}
