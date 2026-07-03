import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: Home },
  { path: 'dashboard', component: Dashboard }
];