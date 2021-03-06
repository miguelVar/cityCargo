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
import { ConductorEliminadoComponent } from './components/conductor-eliminado/conductor-eliminado.component'
import { GuardService } from './services/guard.service';
import { from } from 'rxjs';
import { DeleteClientsComponent } from './components/delete-clients/delete-clients.component';
import { DeleteServicesComponent } from './components/delete-services/delete-services.component';
import { EndservicesComponent } from './components/endservices/endservices.component';

const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [GuardService] },
    { path: 'client', component: ClientsComponent, canActivate: [GuardService] },
    { path: 'vehiculo', component: VehiculoComponent, canActivate: [GuardService] },
    { path: 'vehcul-eliminado', component: VehiculoEliminadoComponent, canActivate: [GuardService] },
    { path: 'conductor-eliminado', component: ConductorEliminadoComponent, canActivate: [GuardService] },
    { path: 'servicio', component: ServicioComponent, canActivate: [GuardService] },
    { path: 'deletedServices', component:DeleteServicesComponent, canActivate: [GuardService]},
    { path: 'endServices', component:EndservicesComponent, canActivate: [GuardService]},
    { path: 'servicio/:id', component: ServicioComponent },
    { path: 'conductor', component: ConductorComponent, canActivate: [GuardService] },
    { path: 'orden', component: OrdenComponent, canActivate: [GuardService] },
    { path: 'etransporte', component: ETransporteComponent, canActivate: [GuardService] },
    { path: 'deletedclients', component:DeleteClientsComponent},
    { path: 'etransporte/:id', component:ETransporteComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
]

export const APP_ROUTING = RouterModule.forRoot(routes);