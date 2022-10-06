import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { BenefitsComponent } from './sections/benefits/benefits.component';
import { PlansComponent } from './sections/plans/plans.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    BenefitsComponent,
    PlansComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [CommonModule, WebsiteRoutingModule, ReactiveFormsModule],
})
export class WebsiteModule {}
