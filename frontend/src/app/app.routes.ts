import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ConductorComponent } from './components/conductor/conductor.component';
import { OrdenComponent } from './components/orden/orden.component';
import { ETransporteComponent } from './components/e-transporte/e-transporte.component';
import { VehiculoEliminadoComponent } from './components/vehiculo-eliminado/vehiculo-eliminado.component';
import { GuardService } from './services/guard.service';
import { from } from 'rxjs';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [GuardService] },
    { path: 'client', component: ClientsComponent },
    { path: 'vehiculo', component: VehiculoComponent },
    { path: 'vehcul-eliminado', component: VehiculoEliminadoComponent },
    { path: 'servicio', component: ServicioComponent },
    { path: 'conductor', component: ConductorComponent },
    { path: 'orden', component: OrdenComponent },
    { path: 'etransporte', component: ETransporteComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
]

export const APP_ROUTING = RouterModule.forRoot(routes);