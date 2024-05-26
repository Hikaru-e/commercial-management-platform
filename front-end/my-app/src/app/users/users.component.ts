import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  showMenu: boolean = false;

  constructor(private router: Router) {} // Inject Router in constructor

  navigateToPage(page: string) {
    this.router.navigate([page]);
}
}