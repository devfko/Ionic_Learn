import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
import { listaPendiente } from '../pendientes/pendientes.component';
import { listaTerminada } from '../terminadas/terminadas.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = HomePage;
  tab1Root:any = listaPendiente;
  tab2Root:any = listaTerminada;
  // tab3Root = ContactPage;

  constructor() {

  }
}
