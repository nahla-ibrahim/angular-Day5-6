import { Routes } from '@angular/router';
import { Productdtl } from './product/productdtl/productdtl';
import { Productlist } from './product/productlist/productlist';
import { Notfound } from './notfound/notfound';
import { authGuard } from './auth-guard';
import { Adduser } from './user/adduser/adduser';

export const routes: Routes = [
  { path: '', redirectTo: 'productlist', pathMatch: 'full' },
  { path: 'productlist', component: Productlist, canActivate: [authGuard] },
  { path: 'productdtl/:id', component: Productdtl },
  { path: 'login', loadComponent: () => import('./login/login').then((m) => m.Login) },
  { path: 'adduser', component: Adduser },

  { path: '**', component: Notfound },
];
