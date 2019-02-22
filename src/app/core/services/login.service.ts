import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  private isAuthenticated = false;
  private authKey = 'auth';

  private authToken = '42342342342342';

  constructor() { }

  public isAuth(): boolean {
    if (!this.isAuthenticated) {
      this.isAuthenticated = window.localStorage.getItem(this.authKey) === this.authToken;
    }
    return this.isAuthenticated;
  }

  public async login(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      // simulate API call
      setTimeout(() => {
        this.isAuthenticated = true;
        console.log('login API call');
        window.localStorage.setItem(this.authKey, this.authToken);
        resolve(true);
      }, 1000);
    });
  }

  public async logout(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      // simulate API call
      setTimeout(() => {
        this.isAuthenticated = false;
        console.log('logout API call');
        window.localStorage.removeItem(this.authKey);
        resolve(true);
      }, 1000);
    });
  }
}
