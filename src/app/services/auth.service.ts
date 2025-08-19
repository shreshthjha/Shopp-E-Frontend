import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8095/api/users'; // via gateway

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, user);
  }

  login(credentials: { email: string, password: string }): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, credentials)
      .pipe(
        tap((user: User) => {
          localStorage.setItem('userId', user.id!.toString());
          localStorage.setItem('userName', user.name);
          localStorage.setItem('userRole', user.role || 'USER');
        })
      );
  }

  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userId');
  }

  getUserId(): number | null {
    const id = localStorage.getItem('userId');
    return id ? +id : null;
  }

  getUserName(): string | null {
    return localStorage.getItem('userName');
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }
}
