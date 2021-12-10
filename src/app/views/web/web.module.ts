import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from '../includes/header/header.component';
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    DetailComponent,
    CartComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, WebRoutingModule, FlexLayoutModule, MaterialModule],
})
export class WebModule {}
