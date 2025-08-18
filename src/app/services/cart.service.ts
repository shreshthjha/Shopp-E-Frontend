import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8095/api/cart';

  constructor(private http: HttpClient) {}

  // Get cart items for userId = 1 (hardcoded for now)
  getCart(): Observable<any> {
    return this.http.get(`${this.baseUrl}/1`);
  }
}
