import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Input() usuario: Usuario | null = null;
  @Output() nuevoUsuario: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  formValidacion: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required]),
    foto: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    clave: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    if (this.usuario) {
      this.formValidacion.setValue({
        nombre: this.usuario?.nombre,
        apellido: this.usuario?.apellido,
        edad: this.usuario?.edad,
        foto: this.usuario?.foto,
        descripcion: this.usuario?.descripcion,
        correo: this.usuario?.correo,
        clave: this.usuario?.clave,
      });
    }
  }

  onSubmit() {
    let nuevoUsuario: Usuario = {
      nombre: this.formValidacion.value.nombre,
      apellido: this.formValidacion.value.apellido,
      edad: this.formValidacion.value.edad,
      foto: this.formValidacion.value.foto,
      descripcion: this.formValidacion.value.descripcion,
      correo: this.formValidacion.value.correo,
      clave: this.formValidacion.value.clave,
    };

    this.nuevoUsuario.emit(nuevoUsuario);
  }
}
