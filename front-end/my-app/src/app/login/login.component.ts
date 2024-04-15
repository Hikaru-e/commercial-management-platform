import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Initialise loginForm dans le constructeur
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Vous pouvez également initialiser loginForm dans ngOnInit si nécessaire
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Vous pouvez ajouter ici la logique pour traiter le formulaire
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      console.log('Username:', username);
      console.log('Password:', password);
    } else {
      // Affichez un message d'erreur ou effectuez une action appropriée si le formulaire n'est pas valide
      console.log('Veuillez remplir tous les champs');
    }
  }
}
