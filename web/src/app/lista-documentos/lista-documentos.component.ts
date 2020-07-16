import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DocumentosService } from '../servicios/documentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent implements OnInit, OnDestroy {

  documentos: Observable<string[]>;
  actualDoc: string;
  documentoAut: any;
  private _docSub: Subscription;

  constructor(private documentoService: DocumentosService, private router: Router) { }

  ngOnInit(): void {
    this.documentos = this.documentoService.docs;
    this._docSub = this.documentoService.documentoActual.subscribe(
      doc => this.actualDoc = doc.id), (this.documentoAut = this.documentos);
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  leerDocumento(id: string) {
    this.documentoService.leerDocumento(id);

    let nombreSala = prompt('nombre de acceso');

    if (this.documentoAut.nombreSala === nombreSala) {
      let passwSala = ('password Sala');
      if (this.documentoAut.passwSala === passwSala) {
        this.documentoService.leerDocumento(id);
        this.router.navigate(['/documentos'])
      } else {
        alert('password incorrecto')
      }
    } else {
      alert('sala incorrecta')
    }
  }

  nuevoDocumento() {
    let nombreSala = prompt('nombre del documento'),
      passwSala = prompt('password para su documento');

    this.documentoService.nuevoDocumento({
      id: '',
      documento: '',
      nombreUsuaio: '',
      nombreSala: '',
      passwSala: ''
    });
  }

}
