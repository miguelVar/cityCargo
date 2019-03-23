import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [GuardService] },
    { path: 'client', component: ClientsComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
]

export const APP_ROUTING = RouterModule.forRoot(routes);