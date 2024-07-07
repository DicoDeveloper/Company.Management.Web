import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: 'companies', component: CompanyListComponent },
  { path: 'create', component: CompanyCreateComponent },
  { path: 'edit/:id', component: CompanyEditComponent },
];
