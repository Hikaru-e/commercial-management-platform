import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  showMenu: boolean = false;

  constructor(private router: Router) {} // Inject Router in constructor

  navigateToPage(page: string) {
    this.router.navigate([page]);
}}
