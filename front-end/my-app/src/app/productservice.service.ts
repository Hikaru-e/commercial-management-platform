import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { Product } from './productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  // Method to add a new product
  getProductById(idPdt: any) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:8080/produits'; // Replace with your backend base URL

  constructor() { }

  // Method to fetch all products
  getAllProducts() {
    return axios.get(`${this.baseUrl}/all`);
  }
 
  // Method to add a new product
  addProduct(product: FormData): Observable<Product> {
    return new Observable(observer => {
      axios.post<Product>(`${this.baseUrl}/add`, product, {
        headers: {
          'Content-Type': 'multipart/form-data'
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
 // Method to search product by name
 searchProductByName(nomProduct: string) {
  return axios.get(`${this.baseUrl}/search_name/${nomProduct}`);}

  deleteProduct(id: number) {
    return axios.delete(`${this.baseUrl}/delete/${id}`);
  }
  getProductsInStock() {
    return axios.get(`${this.baseUrl}/en_stock`);
  }

  getProductsNotInStock() {
    return axios.get(`${this.baseUrl}/hors_stock`);
  }

  updateProduct(id: number, updatedProduct: Product) {
    return axios.put(`${this.baseUrl}/modify/${id}`, updatedProduct);
  }
  
  searchProductById(id: number) {
    return axios.get(`${this.baseUrl}/search/{id}`);}


}


