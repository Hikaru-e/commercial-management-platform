import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients = [
    { id: 1, name: 'Client 1' },
    { id: 2, name: 'Client 2' },
    { id: 3, name: 'Client 3' },
    { id: 4, name: 'Client 4' },
    { id: 5, name: 'Client 5' }
  ];

  constructor() { }

  getClients() {
    return this.clients;
  }

  addClient(client: any) {
    this.clients.push(client);
  }

  deleteClient(id: number) {
    this.clients = this.clients.filter(client => client.id !== id);
  }

  updateClient(id: number, newName: string) {
    const client = this.clients.find(client => client.id === id);
    if (client) {
      client.name = newName;
    }
  }
}
