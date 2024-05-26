import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../productInterface';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  products: any[] = [];
  baseUrl = 'http://localhost:8080/produits';
  newProduct: any = {
    idPdt:0,
    namePdt: '',
    description: '',
    categoriePdt: '',
    prixPdt: 0,
    nvStockPdt: 0,
    bareCode :0,
    imagePath : '',
  };
  selectedFile: File | null = null;

  constructor(private httpClient: HttpClient) { }

  onFileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.selectedFile = fileList[0];
    } else {
      this.selectedFile = null;
    }
  }
   
  uploadFile(): void {
    if (!this.selectedFile) {
        console.error('No file selected.');
        return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('product', JSON.stringify(this.newProduct)); // Append the product data

    this.httpClient.post(`${this.baseUrl}/upload`, formData).subscribe(
        (uploadResponse: any) => {
            console.log('File uploaded successfully:', uploadResponse);
            // Optionally, you can trigger other actions after successful upload
        },
        error => {
            console.error('Error uploading file:', error);
        }
    );
}
  addProduct(): void {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }
    const confirmUpload = confirm('Do you want to upload the selected file?');
    if (confirmUpload) {
        // If the user confirms, upload the file
        this.uploadFile();
    } 

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('idPdt', this.newProduct.idPdt.toString());
    formData.append('namePdt', this.newProduct.namePdt);
    formData.append('description', this.newProduct.description);
    formData.append('categoriePdt', this.newProduct.categoriePdt);
    formData.append('bareCode', this.newProduct.bareCode.toString());
    formData.append('prixPdt', this.newProduct.prixPdt.toString());
    formData.append('nvStockPdt', this.newProduct.nvStockPdt.toString());
    formData.append('imagePath', this.newProduct.imagePath);
    formData.append('imagePath', 'assets/' + this.selectedFile.name);

    this.httpClient.post(`${this.baseUrl}/add`, formData).subscribe(
        response => {
          console.log('Product added successfully:', response);
          this.resetForm();  // Reset the form after successful addition
        },
        error => {
          console.error('Error adding product:', error);
        }
    );
  }

  private resetForm(): void {
    // Reset the form and all inputs
    this.newProduct = {
      idPdt:0,
      namePdt: '',
      description: '',
      categoriePdt: '',
      prixPdt: 0,
      nvStockPdt: 0,
      bareCode : 0,
    };
    this.selectedFile = null;
  }
}
