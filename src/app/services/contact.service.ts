import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = `${environment.apiBaseUrl}/contact`;

  constructor(private http: HttpClient) {}

  /** GET  /api/contact */
  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl);
  }

  /** GET  /api/contact/{id} */
  get(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseUrl}/${id}`);
  }

  /** POST /api/contact */
  create(data: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl, data);
  }

  /** PUT  /api/contact/{id} */
  update(id: number, data: Contact): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, data);
  }

  /** DELETE /api/contact/{id} */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
