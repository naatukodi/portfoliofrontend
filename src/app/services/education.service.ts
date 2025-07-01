import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../models/education';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private baseUrl = `${environment.apiBaseUrl}/education`;

  constructor(private http: HttpClient) {}

  /** GET  /api/education */
  getAll(): Observable<Education[]> {
    return this.http.get<Education[]>(this.baseUrl);
  }

  /** GET  /api/education/{id} */
  get(id: number): Observable<Education> {
    return this.http.get<Education>(`${this.baseUrl}/${id}`);
  }

  /** POST /api/education */
  create(data: Education): Observable<Education> {
    return this.http.post<Education>(this.baseUrl, data);
  }

  /** PUT  /api/education/{id} */
  update(id: number, data: Education): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, data);
  }

  /** DELETE /api/education/{id} */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
