import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Company {
  id: string;
  name: string;
  sizeType: string;
}

export interface CompanyResponse {
  data: Company[];
  currentPage: number;
  totalItems: number;
  totalPages: number;
}

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private baseUrl = 'https://localhost:7063/Company';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<CompanyResponse> {
    return this.http.get<CompanyResponse>(`${this.baseUrl}/companies:paginated`);
  }

  getCompany(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/${id}`);
  }

  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.baseUrl, company);
  }

  updateCompany(id: string, company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.baseUrl}/${id}`, company);
  }

  deleteCompany(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
