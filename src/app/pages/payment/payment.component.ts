import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PaymentComponent {

  message = '';

  constructor(private paymentService: PaymentService) {}

  pay() {
    const orderId = 1;  // hardcoded order id for now
    this.paymentService.createPayment(orderId).subscribe((payment) => {
      // payment.id contains the payment record ID
      this.paymentService.updatePaymentStatus(payment.id, 'SUCCESS').subscribe(() => {
        this.message = 'Payment successful!';
      });
    });
  }
}
