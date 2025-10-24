import { Component, inject } from '@angular/core';
import { Productserv } from '../productserv';
import { Iproduct } from '../iproduct';
import { Shadow } from '../../directives/shadow';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { Productcard } from '../productcard/productcard';
import { AsyncPipe } from '@angular/common';
import { SearchPipe } from '../../Pipes/search-pipe';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-prductlist',
  imports: [Shadow, RouterOutlet, RouterLink, AsyncPipe, Productcard, SearchPipe, FormsModule],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {
  productservice = inject(Productserv);
  searchTerm = '';

  products = this.productservice.getproduct().pipe(map((products) => products ?? []));

  getProductData(product: Iproduct) {
    console.log('data from output', product);
  }
}
