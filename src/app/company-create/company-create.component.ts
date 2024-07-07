import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService, Company } from '../company.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company-create.component.html',
  styleUrl: './company-create.component.scss',
})
export class CompanyCreateComponent {
  company: Company = { id: '', name: '', sizeType: '' };

  sizeTypes = ['Pequena', 'Média', 'Grande'];

  constructor(private companyService: CompanyService, private router: Router) {}

  createCompany(): void {
    this.companyService.createCompany(this.company).subscribe(() => {
      this.router.navigate(['/companies']);
    });
  }
}
