import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private baseUrl = 'http://localhost:8080/fournisseurs';

  constructor() { }

  getFournisseurs() {
    return axios.get(`${this.baseUrl}/all`);
  }

  addFournisseur(fournisseur: any) {
    return axios.post(`${this.baseUrl}/add`, fournisseur, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  deleteFournisseur(id: number) {
    return axios.delete(`${this.baseUrl}/delete/${id}`);
  }

  updateFournisseur(id: number, updatedFournisseur: any) {
    return axios.put(`${this.baseUrl}/modify/${id}`, updatedFournisseur, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getFournisseurById(id: number) {
    return axios.get(`${this.baseUrl}/search_id/${id}`);
  }

  searchFournisseurByName(nomSociete: string) {
    return axios.get(`${this.baseUrl}/search_name/${nomSociete}`);
  }

  getHistoriqueAchats(idFournisseur: number) {
    return axios.get(`${this.baseUrl}/historique_achats/${idFournisseur}`)
  }
  
}
