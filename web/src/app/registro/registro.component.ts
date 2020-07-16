import { Component, OnInit } from '@angular/core';
import { LoginService } from "../servicios/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  datos = {email: '', contrasena: ''}
  constructor(private auntenticar: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  // registrar(): boolean {
  //   this.auntenticar.logIn(this.datos)
  //   .subscribe(res => {
  //     alert('Se a registrado exitosamente')
  //     this.router.navigate(['/login'])
  //   },
  //   err => {
  //     console.log(err)
  //   })
  //   return false 
  // }
}
