// registro.component.ts
import { Component } from '@angular/core';
import { IUser } from 'src/app/interface/IUser';
import { RegisterService } from 'src/app/service/register.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  public nombre: any;
  public apellido: any;
  public correo: any;
  public password: any;

  constructor(private registerService: RegisterService) {}

  registerUser(): void {
    const data: IUser = {
      firstName: this.nombre,
      lastName: this.apellido,
      email: this.correo,
      password: this.password
    };
    //insertar usuarios 
    this.registerService.registrarUsuario(data).subscribe(
      (res: any) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Usuario registrado',
          text: 'Usuario registrado correctamente'
        });
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al insertar usuarios'
        });
      } 
    );
  }
}
