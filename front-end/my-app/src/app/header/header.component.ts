import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showMenu: boolean = false; // Déclari a oumaima la propriété showMenu

  constructor() { }

}
