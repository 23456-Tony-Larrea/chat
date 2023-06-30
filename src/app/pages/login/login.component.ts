import { Component } from '@angular/core';
import { ILogin } from 'src/app/interface/ILogin';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public correo: any;
  public password: any;
  constructor(private loginService: LoginService ,private router: Router) {}
  loginUser(): void {
    const data: ILogin = {
      email: this.correo,
      password: this.password
    };
    //insertar usuarios 
    this.loginService.loginUser(data).subscribe(
      (res: any) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Usuario registrado',
          text: 'Usuario registrado correctamente'
        }).then(() => {
          this.router.navigate(['/inicio']);
          //almacenar token
          localStorage.setItem('token', res.token);
        });
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Credenciales incorrectas'
        });
      } 
    )
  }
}
