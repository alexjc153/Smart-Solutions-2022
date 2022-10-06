import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';

@NgModule({
  declarations: [
    NavComponent,
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    BodyComponent,
    SublevelMenuComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
