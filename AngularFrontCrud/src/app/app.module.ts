import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { EditarComponent } from './components/editar/editar.component';

//angular material

import { SharedModule } from './components/Shared/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    RegistrarComponent,
    EditarComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
