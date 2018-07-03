import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabsPage } from '../pages/tabs/tabs';

import { ListaDeseosService } from './services/lista-deseos.service';

import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TerminadosComponent } from '../pages/terminados/terminados.component';

// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { AgregarComponent } from '../pages/agregar/agregar.component';
import { DetalleComponent } from '../pages/detalle/detalle.component';
import { PlaceHolderPipe } from './pipes/placeholder.pipe';
import { PendientesPipe } from './pipes/pendientes.pipe';

@NgModule({
  declarations: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    PendientesComponent,
    TabsPage,
    AgregarComponent,
    PlaceHolderPipe,
    PendientesPipe,
    DetalleComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp), BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    PendientesComponent,
    TabsPage,
    AgregarComponent,
    DetalleComponent
  ],
  providers: [
    // StatusBar,
    // SplashScreen,
    ListaDeseosService,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}
