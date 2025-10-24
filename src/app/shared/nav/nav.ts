import { Component, inject } from '@angular/core';
import { Productserv } from '../../product/productserv';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  router = inject(Router);

  productservice = inject(Productserv);
  products = this.productservice.getproductSignal();
  favproducts = this.productservice.getfavproductSignal();
  deleteProduct(id: number) {
    this.productservice.deleteProduct(id);
  }
  deletefavProduct(id: number) {
    this.productservice.deletefavProduct(id);
  }
  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }
  adduser() {
    this.router.navigate(['/adduser']);
  }
}
