import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private loginAuthService: LoginAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const Email = this.loginForm.get('Email')?.value;
      const Password = this.loginForm.get('Password')?.value;
  
      this.loginAuthService.login(Email, Password).subscribe(
        (response: any) => {
          console.log('Login successful');
  
          // Vérifiez si la réponse est null ou ne contient pas la propriété 'role'
          if (response && response.roleUser) {
            const roleUser = response.roleUser;
            this.router.navigate(['/headr'], { queryParams: { role: roleUser } });
            if (roleUser === 'admin') {
              this.router.navigate(['/Home']);
            } else if (roleUser === 'utilisateur') {
              this.router.navigate(['/Home']);
            } else {
              console.error('Unknown role:', roleUser);
              // Gérer le rôle inconnu
            }
          } else {
            console.error('Role not found in response:', response);
            // Gérer le cas où la propriété 'role' n'est pas présente dans la réponse
          }
        },
        error => {
          console.error('Login failed:', error);
          // Gérer l'échec de la connexion
        }
      );
    } else {
      console.log('Please fill out all fields');
    }
  }
  
  
}
