import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ControllerService } from '../../services/controller.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  displayedColumns: string[] = ['Usuario', 'Nombre', 'Apellido', 'Sexo', 'Acciones'];
  dataSource: any;




  constructor(private controller: ControllerService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.showUsers();
  }

  async showUsers() {
    this.dataSource = null;
    (await this.controller.getUsuarios()).subscribe(
      (res: any) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);

      }
    );

  }

  async deleteUser(id: any) {
    (await this.controller.deleteUser(id)).subscribe(

      (res: any) => {
        console.log(res)

      }

    )

    this._snackBar.open("Usuario Eliminado", 'Cerrar', {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: "center"

    });
    window.location.reload();
}
}
