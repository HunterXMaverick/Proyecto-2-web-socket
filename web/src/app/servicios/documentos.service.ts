import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io'
import { Documentos } from './../modelos/documentos'
import { SocketJwtService } from './socket-jwt.service'

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  documentoActual = this.socket.fromEvent<Documentos>('gestionDato');
  docs = this.socket.fromEvent<string[]>('gestionDatos');

  constructor(private socket: Socket) { }

  leerDocumento(id: string){
    this.socket.emit('getDoc', id);
  }

  nuevoDocumento(doc){
    if(this.socket.ioSocket.connected){
      this.socket.emit('addDoc', doc);
    }else{
      alert('Token Invalido');
    }
  }

  editDocumento(doc: Documentos){
    this.socket.emit('editDoc', doc);
  }

}
