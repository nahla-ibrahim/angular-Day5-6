import { inject, Injectable, signal } from '@angular/core';
import { Iproduct } from './iproduct';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Productserv {
  private ApiData = 'https://dummyjson.com/products?limit=10&skip=20';
  private http = inject(HttpClient);
  // private products: Iproduct[] = [
  //   {
  //     id: 1,
  //     image: 'https://picsum.photos/300?random=1',
  //     title: 'Wireless Headphones',
  //     description: 'High-quality over-ear wireless headphones with noise cancellation.',
  //     price: 1499.99,
  //     rate: 4.5,
  //     count: 230,
  //   },
  //   {
  //     id: 2,
  //     image: 'https://picsum.photos/300?random=2',
  //     title: 'Smart Watch',
  //     description: 'Water-resistant smartwatch with fitness tracking and heart-rate monitor.',
  //     price: 999.99,
  //     rate: 4.2,
  //     count: 180,
  //   },
  //   {
  //     id: 3,
  //     image: 'https://picsum.photos/300?random=3',
  //     title: 'Bluetooth Speaker',
  //     description: 'Portable speaker with deep bass and long battery life.',
  //     price: 599.5,
  //     rate: 4.7,
  //     count: 410,
  //   },
  //   {
  //     id: 4,
  //     image: 'https://picsum.photos/300?random=4',
  //     title: 'Gaming Mouse',
  //     description: 'Ergonomic gaming mouse with RGB lighting and 6 programmable buttons.',
  //     price: 299.99,
  //     rate: 4.3,
  //     count: 150,
  //   },
  //   {
  //     id: 5,
  //     image: 'https://picsum.photos/300?random=5',
  //     title: 'Mechanical Keyboard',
  //     description: 'Backlit mechanical keyboard with blue switches and metal frame.',
  //     price: 749.0,
  //     rate: 4.6,
  //     count: 320,
  //   },
  //   {
  //     id: 6,
  //     image: 'https://picsum.photos/300?random=6',
  //     title: '4K Monitor',
  //     description: 'Ultra HD 27-inch monitor with HDR and slim bezels.',
  //     price: 4999.0,
  //     rate: 4.8,
  //     count: 95,
  //   },
  //   {
  //     id: 7,
  //     image: 'https://picsum.photos/300?random=7',
  //     title: 'Wireless Charger',
  //     description: 'Fast wireless charger compatible with all Qi-enabled devices.',
  //     price: 299.0,
  //     rate: 4.1,
  //     count: 280,
  //   },
  //   {
  //     id: 8,
  //     image: 'https://picsum.photos/300?random=8',
  //     title: 'Laptop Stand',
  //     description: 'Adjustable aluminum laptop stand for better ergonomics.',
  //     price: 249.0,
  //     rate: 4.4,
  //     count: 120,
  //   },
  //   {
  //     id: 9,
  //     image: 'https://picsum.photos/300?random=9',
  //     title: 'USB-C Hub',
  //     description: 'Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.',
  //     price: 499.0,
  //     rate: 4.0,
  //     count: 85,
  //   },
  //   {
  //     id: 10,
  //     image: 'https://picsum.photos/300?random=10',
  //     title: 'Action Camera',
  //     description: 'Waterproof 4K action camera with wide-angle lens.',
  //     price: 1899.0,
  //     rate: 4.5,
  //     count: 210,
  //   },
  //   {
  //     id: 11,
  //     image: 'https://picsum.photos/300?random=11',
  //     title: 'Smartphone Gimbal',
  //     description: '3-axis stabilizer gimbal for smooth smartphone videos.',
  //     price: 1599.0,
  //     rate: 4.3,
  //     count: 75,
  //   },
  //   {
  //     id: 12,
  //     image: 'https://picsum.photos/300?random=12',
  //     title: 'External SSD 1TB',
  //     description: 'High-speed portable SSD with USB-C interface.',
  //     price: 2299.0,
  //     rate: 4.9,
  //     count: 190,
  //   },
  // ];
  private productSignal = signal<Iproduct[]>([]);
  private favsignal = signal<Iproduct[]>([]);
  // getproduct() {
  //   return this.http.get<Iproduct[]>(this.ApiData);
  // }
  getproduct() {
    return this.http.get<{ products: Iproduct[] }>(this.ApiData).pipe(map((res) => res.products));
  }

  getproductSignal() {
    return this.productSignal;
  }
  setProductSignal(item: Iproduct) {
    this.productSignal.update((newlist) =>
      newlist.some((i) => i.id === item.id) ? newlist : [...newlist, item]
    );
  }
  deleteProduct(productId: number) {
    this.productSignal.update((arr) => arr.filter((p) => p.id !== productId));
  }
  //////////////////fav//////////////////////
  getfavproductSignal() {
    return this.favsignal;
  }
  setfavSignal(item: Iproduct) {
    this.favsignal.update((newl) => (newl.some((i) => i.id === item.id) ? newl : [...newl, item]));
  }

  deletefavProduct(productId: number) {
    this.favsignal.update((arr) => arr.filter((p) => p.id !== productId));
  }
  getUserById(id: number) {
    return this.http.get<any>(`https://dummyjson.com/products/${id}`);
  }
}
