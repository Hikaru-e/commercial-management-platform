import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UtilsateurService {

  constructor() { }
  private baseUrl = 'http://localhost:8080/utilisateurs'; // Replace with your backend base URL

  getAllUsers() {
    return axios.get(`${this.baseUrl}/all`);
  }
  addUser(user: User): Observable<User> {
    return new Observable(observer => {
      axios.post<User>(`${this.baseUrl}/add`, user, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        observer.next(response.data);
        observer.complete();
      })
      .catch(error => {
        observer.error(error);
      });
    });
  }

  searchUserByName(nomUser: string) {
    return axios.get(`${this.baseUrl}/search_name/${nomUser}`);}
    
  deleteUser(id: number) {
      return axios.delete(`${this.baseUrl}/delete/${id}`);
    }
  
  updateProduct(id: number, updatedUser: User) {
      return axios.put(`${this.baseUrl}/modify/${id}`, updatedUser);
    }
    
  searchProductById(id: number) {
      return axios.get(`${this.baseUrl}/search/{id}`);}

}

