import { Component } from '@angular/core';
import { AuthService, User } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [CommonModule,FormsModule]
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
  const user: User = { 
    name: this.name, 
    email: this.email, 
    password: this.password, 
    role: 'USER'  // hardcode role
  };
  this.authService.register(user).subscribe({
    next: (res) => {
      this.message = `User registered: ${res.name}`;
      this.router.navigate(['/login']);
    },
    error: (err) => {
      this.message = 'Registration failed!';
      console.error(err);
    }
  });
}

}
