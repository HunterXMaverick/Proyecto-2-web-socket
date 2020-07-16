import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { WebServiceService } from './web-service.service';
import { PermisosService } from './permisos.service';
import { DataRx } from '../modelos/data-rx';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string;

  //private URL = 'http://localhost:3500'
  constructor(
    private http: HttpClient,
    private server: WebServiceService,
    private permissions: PermisosService) {
    this.url = server.getUrl();
  }

  // logIn(dataLogin): Observable:<DataRx>{
  //   return this.http.post<DataRx>(`${this.url}login`, dataLogin);
  // }
}
