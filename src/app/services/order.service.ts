import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8095/orders';

  constructor(private http: HttpClient) { }

  createOrder(order: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, order);
  }

  getOrdersByUser(userId: number) {
  return this.http.get(`http://localhost:8095/orders/${userId}`);
}

}
