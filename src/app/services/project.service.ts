import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = `${environment.apiBaseUrl}/project`;

  constructor(private http: HttpClient) {}

  /** GET  /api/project */
  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl);
  }

  /** GET  /api/project/{id} */
  get(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/${id}`);
  }

  /** POST /api/project */
  create(data: Project): Observable<Project> {
    return this.http.post<Project>(this.baseUrl, data);
  }

  /** PUT  /api/project/{id} */
  update(id: number, data: Project): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, data);
  }

  /** DELETE /api/project/{id} */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
