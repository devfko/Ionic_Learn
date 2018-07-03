import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listasNombre:Lista[] = [];

  constructor() {

    // let lista1 = new Lista('Compras');
    // let lista2 = new Lista('Corticos');
    // let lista3 = new Lista('Negocios');
    //
    // this.listasNombre.push(lista1);
    // this.listasNombre.push(lista2);
    // this.listasNombre.push(lista3);

    this.cargarData();
    console.log("Servicio Inicializado!!!");
  }

  actualizarData(){
    localStorage.setItem( "data", JSON.stringify(this.listasNombre) );
  }

  cargarData(){
    if ( localStorage.getItem( "data" ) ){
      this.listasNombre=JSON.parse(localStorage.getItem( "data" ));
    }
  }

  agregarLista( lista:Lista ){
    this.listasNombre.push(lista);
    this.actualizarData();
  }

  borrarLista( idx:number ){
    this.listasNombre.splice(idx,1);
    this.actualizarData();
  }

}
