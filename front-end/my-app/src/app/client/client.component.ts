import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: any[] = []; // Initialiser clients avec une liste vide

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clients = this.clientService.getClients();
    console.log(this.clients)
  }

  addClient() {
    const newClientId = this.clients.length + 1;
    const newClient = { id: newClientId, name: `Client ${newClientId}` };
    this.clientService.addClient(newClient);
    this.getClients();
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id);
    this.getClients();
  }

  updateClient(id: number, newName: string) {
    this.clientService.updateClient(id, newName);
    this.getClients();
  }
}
