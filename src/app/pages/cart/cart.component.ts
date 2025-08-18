import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart().subscribe((data) => {
      this.cartItems = data;
    });
  }

  checkout() {
  this.orderService.createOrder({ userId: 1 }).subscribe(() => {
    this.router.navigate(['/payment']);
  });
 }

}
