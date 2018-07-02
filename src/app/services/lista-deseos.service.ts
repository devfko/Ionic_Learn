import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listasNombre:Lista[] = [];

  constructor() {

    let lista1 = new Lista('Compras');
    let lista2 = new Lista('Culitos');
    let lista3 = new Lista('Negocios');

    this.listasNombre.push(lista1);
    this.listasNombre.push(lista2);
    this.listasNombre.push(lista3);

    console.log("Servicio Inicializado!!!");
  }
}
