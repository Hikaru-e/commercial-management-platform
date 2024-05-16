import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8080/clients'; // Mettez votre URL de backend ici

  constructor() { }

  getClients() {
    return axios.get(`${this.baseUrl}/all`);
  }

  addClient(client: any) {
    return axios.post(`${this.baseUrl}/add`, client);
  }

  deleteClient(id: number) {
    return axios.delete(`${this.baseUrl}/delete/${id}`);
  }

  updateClient(id: number, newName: string) {
    return axios.put(`${this.baseUrl}/modify/${id}`, { name: newName });
  }

  searchClientByName(nomClient: string) {
    return axios.get(`${this.baseUrl}/search_name/${nomClient}`);
  }
}
