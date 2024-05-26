import { Component,OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { MatDialog } from '@angular/material/dialog';
import { EditproductComponent } from './editproduct/editproduct.component';
@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrl: './getproduct.component.css'
})
export class GetproductComponent implements OnInit {
  products: any[] = []; // Initialiser clients avec une liste vide
  editMode = false;
  editingProductId: number | null = null; // Pour stocker l'ID du client en cours d'édition


  constructor(private productService: ProductserviceService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
   
  getLocalImagePath(imagePath: string): string {
    return `assets/images/${imagePath}`; // Adjust the path as per your folder structure
  }

  getAllProducts() {
    this.productService.getAllProducts().then(response => {
      this.products = response.data;
    }).catch(error => {
      console.error('Error fetching products:', error);
    });
  }
  
  startEditingProduct(productId: number) {
    console.log('startEditingClient called with client ID:', productId);
    this.editingProductId = productId;
    this.openEditProductDialog();
  }
  
  
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).then(() => {
      this.getAllProducts();
    }).catch(error => {
      console.error('Error deleting client:', error);
    });
  }

  openEditProductDialog(): void {
    const dialogRef = this.dialog.open(EditproductComponent, {
      width: '400px',
      data: { editingProductId: this.editingProductId }
    });

  dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.editingProductId = null;
    });
  }

  showProductsInStock() {
    this.productService.getProductsInStock()
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error('Error fetching products in stock:', error);
      });
  }

  showProductsNotInStock() {
    this.productService.getProductsNotInStock()
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error('Error fetching products not in stock:', error);
      });
  }
  
  cancelEditing() {
    this.editMode = false;
    this.editingProductId = null;
  }
  

}
