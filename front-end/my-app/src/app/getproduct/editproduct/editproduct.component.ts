import { Component, Inject } from '@angular/core';
import { ProductserviceService } from '../../productservice.service';
import { Product } from '../../productInterface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {

  product:Product|any
  newproduct:Product|any
  constructor(private productService: ProductserviceService,
    @Inject(MAT_DIALOG_DATA) public data: { editingProductId: number }) {}

  searchProductById() {
      const editingProductId = this.data.editingProductId; // Accessing editingProductId from data
      if (editingProductId) {
        this.productService.searchProductById(editingProductId)
            .then(product => {
              this.product = product;
              console.log("Product fetched successfully:", this.product);
          })
          .catch(error => {
            console.error('Error searching product by ID:', error);
            // Optionally, handle error and display a message to the user
          });
      } else {
        console.warn('Product ID is required.');
        // Optionally, display a message to the user indicating that the product ID is required
      }
  }

  updateProduct() {
    this.productService.updateProduct(this.product.idPdt, this.newproduct)
      .then(response => {
        console.log('Product updated successfully:', response);
        // Optionally, handle success response
      })
      .catch(error => {
        console.error('Error updating product:', error);
        // Optionally, handle error
      });
  }
  // In your Angular component



}
