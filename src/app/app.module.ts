import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CompanyEditComponent,
    HttpClientModule,
    FormsModule,
    CompanyListComponent,
    CompanyCreateComponent,
  ],
  providers: [],
})
export class AppModule {}
