import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mi-componente',
  templateUrl: './Example_Component.component.html'
})

// tslint:disable-next-line:component-class-suffix
export class MiComponente{
  public titulo: string;
  public comentario: string;
  public year: number;

  constructor() {
    this.titulo = 'Esto es un ejemplo';
    this.comentario = 'Estoy probando';
    this.year = 2020;

    console.log('Componente Cargado...');
  }
}
