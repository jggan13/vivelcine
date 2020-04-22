import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyBtK4LZbXsxpL25DuC1CoV0608wFdOSKRc';
  userToken: string;
  userEmail:string;
  
  //crear nuevo usuario 
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.readToken();
   }

  login = (usuario: UsuarioModel) => {

    const authData = {
      ...usuario,
      returnSecureToken : true
    }

    return this.http.post(`${this.url}signInWithPassword?key=${this.apikey}`, authData).pipe(map((res) => {
      this.saveToken(res['idToken'], res['email']);
      return res;
    }));

  }

  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('expira');
    this.readToken();
    this.userEmail = '';
  }

  register = (usuario: UsuarioModel) => {

    const authData = {
      ...usuario,
      returnSecureToken : true
    }

    return this.http.post(`${this.url}signUp?key=${this.apikey}`, authData).pipe(map((res) => {
      //this.saveToken(res['idToken'] , res['email']);
      return res;
    }));

  }

  saveToken = (idToken: string, email:string) => {

    this.userToken = idToken;
    this.userEmail = email;
    localStorage.setItem('token', idToken);
    localStorage.setItem('email', email);
    let today = new Date();
    today.setSeconds(18000);
    localStorage.setItem('expira', today.getTime().toString());

  }

  readToken = () => {

    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }
    if(localStorage.getItem('email')){
      this.userEmail = localStorage.getItem('email');
    }else{
      this.userEmail = '';
    }

    return this.userToken;
  }

  isAuthenticated = ():boolean => {
    if(this.userToken.length < 2){
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if(expiraDate > new Date()){
      return true;
    }else{
      return false;
    }

  }
}
