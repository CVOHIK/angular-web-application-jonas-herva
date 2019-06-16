import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationComponent } from './education/education.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {
    path: '', component: EducationComponent,
  },
  {
    path: 'schools', component: EducationComponent,
  },
  {
    path: 'companies', component: CompanyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  EducationComponent,
  CompanyComponent
];
