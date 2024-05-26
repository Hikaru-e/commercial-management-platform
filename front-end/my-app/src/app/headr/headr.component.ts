import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headr',
  templateUrl: './headr.component.html',
  styleUrl: './headr.component.css'
})
export class HeadrComponent {
  showMenu: boolean = false; 
  roleUser: string | null | undefined;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    // Retrieve the user role from query parameters
    this.route.queryParams.subscribe(params => {
      this.roleUser = params['roleUser'];
    });
}}


