import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuotesAndProformasService {
  constructor(private http: HttpClient) {}

  baseURL = environment.baseURL;

  getQuotesAndProformas() {
    const headers = new HttpHeaders({
      'X-Tenant': '177f47ca-b104-4694-987e-1d1db4ef6287',
    });
    return this.http.get(`${this.baseURL}/quotes-and-proformas`, {
      headers: headers,
    });
  }
}
