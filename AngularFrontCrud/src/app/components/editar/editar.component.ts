import { Component, OnInit } from '@angular/core';

import { ControllerService } from '../../services/controller.service';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  displayedColumns: string[] = ['Usuario', 'Nombre', 'Apellido', 'Sexo', 'Acciones'];
  dataSource:any;

  formUpdate = new FormGroup({
    nombre: new FormControl(' ', Validators.required),
    correo: new FormControl(' ', Validators.required),
    direccion: new FormControl(' ', Validators.required),
    telefono: new FormControl(' ', Validators.required),
  });

  idUser:any;

  constructor(private controller:ControllerService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      console.log(params.id);

        this.getUser(params.id);
      this.idUser = params.id;

    })
    
  }

   async getUser(id:any){

    (await this.controller.getUser(id)).subscribe(
      (userData:any) => {
        console.log(userData[0].nombre);
                                    // del array que se regreso, en la posicion cero, se toma el campo nombre
        this.formUpdate.controls['nombre'].setValue(userData[0].nombre);
        // establecer un valor para el formControl declarado arriba

        this.formUpdate.controls['correo'].setValue(userData[0].correo);
        this.formUpdate.controls['direccion'].setValue(userData[0].direccion);
        this.formUpdate.controls['telefono'].setValue(userData[0].telefono);

      }

    )
   }



  async update(){

    if (this.formUpdate.valid) {
       (await this.controller.updateUser(this.formUpdate.value, this.idUser)).subscribe((res: any) => {
        console.log(res);
       
      });
      this._snackBar.open("Usuario Actualizado", 'Cerrar', {
        duration: 2500,
        verticalPosition: 'bottom',
        horizontalPosition: "center"
      });
    } else {
      console.log('ERROR');
    }

  }

}
