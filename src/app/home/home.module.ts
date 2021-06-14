import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CardNewComponent } from './components/card-new/card-new.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, CardNewComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
