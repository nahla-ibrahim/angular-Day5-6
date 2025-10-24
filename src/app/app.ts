import { Component, signal } from '@angular/core';
import { Productlist } from './product/productlist/productlist';
import { Nav } from './shared/nav/nav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Productlist, Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app');
}
