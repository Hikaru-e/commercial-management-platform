import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import axios from 'axios'; // Import Axios for making HTTP requests
import { Product } from '../productInterface';

@Component({
  selector: 'app-findproductbyname',
  templateUrl: './findproductbyname.component.html',
  styleUrl: './findproductbyname.component.css'
})
export class FindproductbynameComponent {
  searchResults: Product | any; 
  productName: string = ''; 

  constructor(private productService: ProductserviceService) { }

  searchProductByName() {
    // Check if productName is not empty
    if (this.productName.trim() !== '') {
      this.productService.searchProductByName(this.productName.trim())
        .then(response => {
          this.searchResults = response.data;
          console.log("its working")
            console.log("khawi")
        
            console.log(this.searchResults)
        })
        .catch(error => {
          console.error('Error searching product:', error);
          // Optionally, handle error and display a message to the user
        });
    } else {
      // Handle case where productName is empty
      console.warn('Product name is empty.');
      // Optionally, display a message to the user indicating that the product name is required
    }
  }
}