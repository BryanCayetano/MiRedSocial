import { Component } from '@angular/core';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  usuarios: Usuario[];
  element = true;
  modificado: Usuario | null = null;

  constructor() {
    const usuariosJSON: string = `{
      "usuarios": [
        {
          "nombre": "Valenti",
          "apellido": "Casas",
          "edad": 25,
          "foto": "https://picsum.photos/300/200",
          "descripcion": "Profesor super guapo y morenote que me pondrá un 10",
          "correo": "vcasas@ilerna.com",
          "clave": "123456"
        },
        {
          "nombre": "Pilar",
          "apellido": "Ponas",
          "edad": 18,
          "foto": "https://picsum.photos/300/200",
          "descripcion": "Soltera amable y simpática",
          "correo": "pponas@gmail.com",
          "clave": "123456"
        }
      ]
    }`;

    const usuariosDict: any = JSON.parse(usuariosJSON);
    this.usuarios = usuariosDict['usuarios'];
  }

  show(): void {
    this.element = true;
  }

  hide(usuario: Usuario | null) {
    this.modificado = usuario;
    this.element = false;
    console.log(this.element);
  }

  nuevoUsuario(nuevo: Usuario) {
    this.usuarios.push(nuevo);
    this.show();
  }
}
