import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private baseUrl = `${environment.apiBaseUrl}/skill`;

  constructor(private http: HttpClient) {}

  /** GET  /api/skill */
  getAll(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl);
  }

  /** GET  /api/skill/{id} */
  get(id: number): Observable<Skill> {
    return this.http.get<Skill>(`${this.baseUrl}/${id}`);
  }

  /** POST /api/skill */
  create(data: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.baseUrl, data);
  }

  /** PUT  /api/skill/{id} */
  update(id: number, data: Skill): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, data);
  }

  /** DELETE /api/skill/{id} */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
