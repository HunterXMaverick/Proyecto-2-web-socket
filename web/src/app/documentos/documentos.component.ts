import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { startWith } from "rxjs/operators";
import { DocumentosService } from '../servicios/documentos.service';
import { Documentos } from '../modelos/documentos';
import { PermisosService } from '../servicios/permisos.service';
import jwt_decode from 'jwt-decode';
import { Router } from "@angular/router";

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit, OnDestroy {
  nombreUsuario: Observable<string>;
  documento: Documentos;
  private _docSub: Subscription;

  constructor(
    private documentosService: DocumentosService, 
    private permission: PermisosService,
    private router: Router) { }

  ngOnInit(): void {
    this._docSub = this.documentosService.documentoActual.pipe(
      startWith(
        {id: '', 
        doc: 'Seleccione un documento o cree un nuevo',
        nombreUsuario: '',
        nombreSala: '',
        passwSala: ''
      })
    ).subscribe(documento => this.documento = documento);
  }

  ngOnDestroy(){
    this._docSub.unsubscribe;
  }

  editarDcoumento(){
    this.getUsuario();
    this.documentosService.editDocumento(this.documento);
  }

  private getUsuario(){
    let decode = jwt_decode(sessionStorage.getItem('token'));
    this.documento.doc = decode.data.nombreUsuario
  }

  documentosLista() {
    this.router.navigate(['/documento/documento-lista']);
  }

}
