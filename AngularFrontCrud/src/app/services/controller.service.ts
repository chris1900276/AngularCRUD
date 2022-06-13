import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ControllerService {

  

  url= 'http://localhost:3002/Api/connection';

  constructor(private http: HttpClient) { }

  //get usuarios
  async getUsuarios() {
    return this.http.get<any>(`${this.url}/get_all_users`).pipe(map(res => {
        return res;
      }));
  }

  /*
  getUsuarios(){
    return this.http.get(`${this.url}/get_all_users`);
  }
  */
  /*
  addUser(form:any){
    return this.http.post(`${this.url}/add_user`, form);
  }
  */

  async addUser(user:any) {
    return this.http.post<any>(`${this.url}/add_user`,user).pipe(map(res => {
        return res;
      }));
  }
/*
  deleteUser(id:any){
    return this.http.get(`${this.url}/delete_user?id=${id}`);
  }
  */

  async deleteUser(id:any) {
    return this.http.get<any>(`${this.url}/delete_user?id=${id}`).pipe(map(res => {
        return res;
      }));
  }
/*
  getUser(id:any){
    return this.http.get(`${this.url}/get_user?id=${id}`);
  }
*/
  async getUser(id:any) {
    return this.http.get<any>(`${this.url}/get_user?id=${id}`).pipe(map(res => {
        return res;
      }));
  }
/*
  updateUser(formUpdate:any, id:any){
    return this.http.post(`${this.url}/update_user?id=${id}`, formUpdate);
  }
*/
  async updateUser(formUpdate:any,id:any) {
    return this.http.post<any>(`${this.url}/update_user?id=${id}`, formUpdate).pipe(map(res => {
        return res;
      }));
  }



}
