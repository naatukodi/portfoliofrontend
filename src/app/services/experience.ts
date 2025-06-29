import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private baseUrl = `${environment.apiBaseUrl}/experience`;

  constructor(private http: HttpClient) {}

  /** GET  /api/experience */
  getAll(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.baseUrl);
  }

  /** GET  /api/experience/{id} */
  get(id: number): Observable<Experience> {
    return this.http.get<Experience>(`${this.baseUrl}/${id}`);
  }

  /** POST /api/experience */
  create(data: Experience): Observable<Experience> {
    return this.http.post<Experience>(this.baseUrl, data);
  }

  /** PUT  /api/experience/{id} */
  update(id: number, data: Experience): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, data);
  }

  /** DELETE /api/experience/{id} */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
