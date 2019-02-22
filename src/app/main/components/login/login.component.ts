import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public get isAuth() {
    return this.loginService.isAuth();
  }

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  public async login(): Promise<void> {
    const isSuccess = await this.loginService.login();
    if (isSuccess) {
      this.goMain();
    }
  }

  public async logout(): Promise<void> {
    const isSuccess = await this.loginService.logout();
    if (isSuccess) {
      this.goMain();
    }
  }

  private goMain(): void {
    this.router.navigate(['']);
  }
}
