import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  @Input() usuario: Usuario;

  constructor() {
    this.usuario = {
      nombre: '',
      apellido: '',
      edad: 0,
      foto: '',
      descripcion: '',
      correo: '',
      clave: '',
    };
  }

  ngOnInit(): void {}
}
