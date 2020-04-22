import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;
  usuario: UsuarioModel;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 
    this.usuario = new UsuarioModel();
    this.createForm();
  }

  ngOnInit(): void {
  }
  
  get emailNoValido(){
   return this.getProperty('email');
 }

 get passwordNoValido(){
   return this.getProperty('password');
 }

  getProperty = (value: string) => {
    return this.forma.get(value).invalid && this.forma.get(value).touched;
  }

  createForm = () => {
    this.forma = this.formBuilder.group({
      email   : [this.usuario.email, [Validators.required]],
      password: [this.usuario.password, [Validators.required, Validators.minLength(6)]]
    });
  }

  login = () => {
    console.log(this.forma);
    
    if(this.forma.invalid){
      return Object.values(this.forma.controls).map(control => {
        control.markAsTouched();
      });
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor.'
    });
    Swal.showLoading();

    this.usuario.email = this.forma.get('email').value;
    this.usuario.password = this.forma.get('password').value;
    console.log(this.usuario);

    this.authService.login(this.usuario).subscribe( (res) => {
      console.log(res);
      Swal.close();
      this.forma.reset();
      this.router.navigateByUrl('movies');
    }, (err) => {
      console.log(err.error.error.message);
      Swal.fire({
        icon: 'error',
        title:'Error al autenticar',
        text: 'Usuario o contraseña incorrecta'
      });
    });

  }


}
