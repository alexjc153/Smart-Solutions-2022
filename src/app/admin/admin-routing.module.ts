import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

// Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnterpriseComponent } from './pages/enterprise/enterprise.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'enterprise',
        loadChildren: () =>
          import('./pages/enterprise/enterprise.module').then(
            (m) => m.EnterpriseModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
