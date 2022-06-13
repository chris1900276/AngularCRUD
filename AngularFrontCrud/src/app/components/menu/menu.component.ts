import { Component, OnInit } from '@angular/core';
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
  dataSource:any;
 

  

  constructor(private controller:ControllerService, private route: ActivatedRoute) { }

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

  async deleteUser(id:any){
    (await this.controller.deleteUser(id)).subscribe(

      (res: any) => {
        console.log(res);
        
      }
    
    )

   window.location.reload();
  
  }

}
