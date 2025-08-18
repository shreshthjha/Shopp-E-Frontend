import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:8095/payments';

  constructor(private http: HttpClient) { }

  // create payment and return Payment record (with id)
  createPayment(orderId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, { orderId: orderId });
  }

  updatePaymentStatus(paymentId: number, status: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${paymentId}?status=${status}`, {});
  }
}
