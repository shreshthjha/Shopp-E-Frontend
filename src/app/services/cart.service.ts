import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8095/cart';

  constructor(private http: HttpClient) {}

  // Get cart items for userId = 1 (hardcoded for now)
  getCart(): Observable<any> {
    return this.http.get(`${this.baseUrl}/1`);
  }

  addToCart(productId: number): Observable<any> {
  const body = {
    userId: 1,       // hardcoded user for now
    productId: productId,
    quantity: 1
  };
  return this.http.post(`http://localhost:8095/cart/add`, body);
}

}
