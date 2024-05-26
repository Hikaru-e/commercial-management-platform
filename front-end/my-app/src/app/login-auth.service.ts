import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  private authStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) {}

login(email: string, password: string): Observable<any> {
    const url = `http://localhost:8080/utilisateurs/login/${email}`;
    const body = { password };
  
    return this.http.post(url, body).pipe(
      tap((response: any) => {
        // Check if 'response' and 'response.token' are not null or undefined
        if (response && response.token) {
          // Store token in local storage
          localStorage.setItem('token', response.token);
          this.authStatus.next(true);
        } else {
          console.error('Token not found in response:', response);
          // Handle the case when token is not present in the response
        }
      })
    );
  }
  
  

  logout(): void {
    localStorage.removeItem('token');
    this.authStatus.next(false);
    this.router.navigate(['/products']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.authStatus.asObservable();
  }

  private hasToken(): boolean {
    return typeof localStorage !== 'undefined' && !!localStorage.getItem('token');
  }
  
}
