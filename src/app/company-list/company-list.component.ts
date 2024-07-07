import { Component } from '@angular/core';
import { CompanyService, Company } from '../company.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
})
export class CompanyListComponent {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService
      .getCompanies()
      .subscribe((companies) => (this.companies = companies.data));
  }

  deleteCompany(id: string): void {
    this.companyService.deleteCompany(id).subscribe(() => this.loadCompanies());
  }
}
