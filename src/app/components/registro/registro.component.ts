import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  forma: FormGroup;
  usuario : UsuarioModel;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.usuario = new UsuarioModel();
    this.createForm();

   }

   get nombreNoValido(){
     return this.getProperty('name');
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

  ngOnInit(): void {
    
  }

  createForm = () => {
    this.forma = this.formBuilder.group({
      email   : [this.usuario.email, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: [this.usuario.password, [Validators.required, Validators.minLength(6)] ],
      name    : [this.usuario.name, Validators.required, ]
    });
  }

  register = () => {
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

    this.usuario.name = this.forma.get('name').value;
    this.usuario.email = this.forma.get('email').value;
    this.usuario.password = this.forma.get('password').value;
    console.log(this.usuario);
    this.authService.register(this.usuario).subscribe( (res) => {
      console.log(res);
      Swal.close();
      this.router.navigateByUrl('login');
    }, (err) => {
      console.log(err.error.error.message);
      Swal.fire({
        icon: 'error',
        title:'Error al crear cuenta',
        text: err.error.error.message === 'EMAIL_EXISTS'? 'Email ya existe':''
      });
    });
  }

}
