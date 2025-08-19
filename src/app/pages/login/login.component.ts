import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule,FormsModule]
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login({ email: this.email, password: this.password })
      .subscribe({
        next: (user) => {
          this.message = `Welcome ${user.name}`;
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.message = 'Login failed! Check email/password';
          console.error(err);
        }
      });
  }
}
