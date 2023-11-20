import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { RickComponent } from './components/rick/rick.component';
import { DialogoComponent } from './components/dialogo/dialogo.component';
import { HttpClientModule } from '@angular/common/http';
import { RickService } from './services/rick.service';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    RickComponent,
    DialogoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [RickService]
})
export class HomeModule { }
