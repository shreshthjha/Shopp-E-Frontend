import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductListComponent implements OnInit {

  products: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(productId: number) {
  this.cartService.addToCart(productId).subscribe(() => {
    alert('Added to cart!');
  });
}
}
