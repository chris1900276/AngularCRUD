import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './components/editar/editar.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'add', component: RegistrarComponent},
  {path: 'edit/:id', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
