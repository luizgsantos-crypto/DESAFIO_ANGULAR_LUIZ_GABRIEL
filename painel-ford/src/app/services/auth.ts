import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/users'; 

  constructor(private http: HttpClient) { }

  login(usuario: string, senha: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const validUser = users.find(u => u.username === usuario && u.password === senha);
        if (validUser && usuario === 'admin' && senha === '123456') {
          localStorage.setItem('isAuthenticated', 'true');
          return true;
        }
        return false;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
  }
}