import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router: Router) { }

  login(username: string, password: string) {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    try {
      if (username === storedUsername && password === storedPassword) {
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        throw new Error('Hibás felhasználónév vagy jelszó');
      }
    } catch (error) {
      console.error('bejelentkezési hiba:', error);
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

   isLoggedIn(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
  }

  register(username: string, password: string) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }

}
