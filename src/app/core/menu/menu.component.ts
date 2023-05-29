import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  username?: string;
  isLoggedin?: false;

  constructor(private auth: AuthService){}
 
  ngOnInit() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername !== null){
      this.username = storedUsername;
    }
    
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  logout(){
    this.auth.logout();
  }

}
