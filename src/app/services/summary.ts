import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Summary } from '../models/summary';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class SummaryService {
  private baseUrl = `${environment.apiBaseUrl}/summary`;

  constructor(private http: HttpClient) {}

  /** GET  /api/summary */
  get(): Observable<Summary> {
    return this.http.get<Summary>(this.baseUrl);
  }

  /** PUT  /api/summary */
  update(data: Summary): Observable<void> {
    return this.http.put<void>(this.baseUrl, data);
  }
}
