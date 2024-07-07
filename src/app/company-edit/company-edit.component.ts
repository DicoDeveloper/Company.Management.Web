import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService, Company } from '../company.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.scss',
})
export class CompanyEditComponent {
  company: Company = { id: '', name: '', sizeType: '' };

  sizeTypes = ['Pequena', 'Média', 'Grande'];

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.companyService
      .getCompany(id)
      .subscribe((company) => (this.company = company));
  }

  updateCompany(): void {
    this.companyService
      .updateCompany(this.company.id, this.company)
      .subscribe(() => {
        this.router.navigate(['/companies']);
      });
  }
}
