import { Component, EventEmitter, inject, input, output, Output } from '@angular/core';
import { Iproduct } from '../iproduct';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Productserv } from '../productserv';
import { CurrencyPipe } from '@angular/common';
import { Shadow } from '../../directives/shadow';
import { TextslicePipe } from '../../Pipes/textslice-pipe';

@Component({
  selector: 'app-productcard',
  imports: [CurrencyPipe, Shadow, RouterOutlet, RouterLink, TextslicePipe],
  templateUrl: './productcard.html',
  styleUrl: './productcard.css',
})
export class Productcard {
  router = inject(Router);
  productservice = inject(Productserv);
  productinput = input.required<Iproduct>();
  products = this.productservice.getproduct();
  hoveredId: number | null = null;
  onProductClick = output<Iproduct>();

  addtocard(item: Iproduct) {
    this.productservice.setProductSignal(item);
  }
  addtofav(item: Iproduct) {
    this.productservice.setfavSignal(item);
  }
  /////////////////////////get product details ///////////////////////
  getProductDtl(id: number) {
    console.log('Clicked product ID:', id);
    this.router.navigate(['/productdtl', id]);
  }
  goToProductdtl(id: number) {
    this.router.navigate(['/productdtl', id]);
  }
  productclicked(product: Iproduct) {
    this.onProductClick.emit(product);
    console.log(product);
  }
}
