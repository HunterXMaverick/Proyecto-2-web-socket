import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuarios';
import { DataRx } from '../modelos/data-rx';
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class PermisosService {
  dataRx: DataRx;
  private token: string;
  private usuarioLogin: Usuario;
  private sessionID: string; r

  constructor() {
    this.token = null;
    this.usuarioLogin = null;
  }

  decodeToken(token: string): boolean {
    const decoded = jwt_decode(token);
    if (decoded) {
      this.token = token || null;
      this.usuarioLogin = decoded.data || null;
      this.sessionID = this.usuarioLogin.sessionID || null;
      delete this.usuarioLogin.sessionID;
      delete this.usuarioLogin.password;
      return true;
    } else {
      return false;
    }
  }

  getToken(): string {
    return this.token;
  }

  destroyToken(): void {
    this.token = null;
  }

  getUsuarioLogin(): object {
    return this.usuarioLogin;
  }

  getSessionID(): string {
    return this.sessionID;
  }

}
