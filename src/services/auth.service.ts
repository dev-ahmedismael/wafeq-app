import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post('http://localhost:8000/api/register', data);
  }
  sendProfileInformation(data: any) {
    let token;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    let headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.post(
      'http://localhost:8000/api/profile-information',
      data,
      { headers: headers }
    );
  }
  sendCompanyInformation(data: any) {
    let token;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    let headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.http.post(
      'http://localhost:8000/api/company-information',
      data,
      { headers: headers }
    );
  }
}
