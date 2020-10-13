import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSenatorsComponent } from './list-senators/list-senators.component';
import { SenatorCostsComponent } from './senator-costs/senator-costs.component';

const routes: Routes = [
  {
    path: 'senator',
    component: ListSenatorsComponent,
  },
  {
    path: 'senator/:id',
    component: SenatorCostsComponent,
  },
  {
    path: '',
    redirectTo: 'senator',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
