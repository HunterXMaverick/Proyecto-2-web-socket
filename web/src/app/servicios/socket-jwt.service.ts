import { Injectable } from '@angular/core';
import { Socket } from "ngx-socket-io";
import { PermisosService} from './permisos.service'

@Injectable()
export class SocketJwtService extends Socket {

  constructor(private permissions:PermisosService) {
    super({ url: 'http://localhost:3500', 
    options: {
      query: `token=${sessionStorage.getItem('token')}`
      } 
    });
  }
}
