import { Component } from '@angular/core';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrl: './header-user.component.css'
})
export class HeaderUserComponent {
  showMenu: boolean = false; // Déclari a oumaima la propriété showMenu

  constructor() { }
}
