import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout()
      .subscribe((data) => {
        localStorage.setItem('usuario', data['token']);
        localStorage.setItem('rol', null);
        console.log('Saliendo');
        this.router.navigate(['login'])
      });
  }

}
