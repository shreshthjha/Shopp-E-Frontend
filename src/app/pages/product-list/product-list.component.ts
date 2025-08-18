import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductListComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(productId: number) {
    // we will implement this later
    alert('Add to cart clicked for product id: ' + productId);
  }
}
