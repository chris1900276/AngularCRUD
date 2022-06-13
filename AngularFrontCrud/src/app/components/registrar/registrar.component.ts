import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { ControllerService } from '../../services/controller.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  // form: FormGroup
  form = new FormGroup({
    nombre: new FormControl(' ', Validators.required),
    correo: new FormControl(' ', Validators.required),
    direccion: new FormControl(' ', Validators.required),
    telefono: new FormControl(' ', Validators.required),
  });

  constructor(
    private _snackBar: MatSnackBar,
    private controller: ControllerService
  ) {}

  ngOnInit(): void {}

  async send() {
    if (this.form.valid) {
      (await this.controller.addUser(this.form.value)).subscribe((res: any) => {
        console.log(res);
      });
    } else {
      console.log('ERROR');
      console.log('ERROR');
    }
  }

  mostrar() {
    console.log(this.form);
    const nombre = this.form.value.nombre;

    if (
      this.form.value.nombre != null &&
      this.form.value.correo != null &&
      this.form.value.direccion != null &&
      this.form.value.telefono != null
    ) {
      // redireccionamiento
    } else {
      // mensaje de error
      this.error();
    }
  }

  error() {
    this._snackBar.open('Complete los campos', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition: 'top',
    });
  }
}
