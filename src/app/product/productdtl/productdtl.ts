import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Productserv } from '../productserv';
import { Iproduct } from '../iproduct';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-productdtl',
  imports: [RouterOutlet],
  templateUrl: './productdtl.html',
  styleUrl: './productdtl.css',
})
export class Productdtl {
  activeroute = inject(ActivatedRoute);
  productservice = inject(Productserv);
  productId = 0;
  products: any;
  x = this.activeroute.params.subscribe((params) => {
    this.productId = params['id'];
    this.productservice.getUserById(this.productId).subscribe((data) => {
      this.products = data;
    });
  });

  id = toSignal(
    this.activeroute.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      filter((id) => !!id)
    )
  );

  product = toSignal(
    this.activeroute.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      filter((id) => !!id),
      switchMap((id) => this.productservice.getUserById(id))
    )
  );

  addtocard(item: Iproduct) {
    this.productservice.setProductSignal(item);
  }

  addtofav(item: Iproduct) {
    this.productservice.setfavSignal(item);
  }
}
