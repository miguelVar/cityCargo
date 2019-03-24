import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ConductorComponent } from './components/conductor/conductor.component';
import { OrdenComponent } from './components/orden/orden.component';
import { ETransporteComponent } from './components/e-transporte/e-transporte.component';
import { VehiculoEliminadoComponent } from './components/vehiculo-eliminado/vehiculo-eliminado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    ClientsComponent,
    VehiculoComponent,
    ServicioComponent,
    ConductorComponent,
    OrdenComponent,
    ETransporteComponent,
    VehiculoEliminadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
