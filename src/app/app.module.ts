import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArquitetoComponent } from './arquiteto/arquiteto.component';
import { ArquitetoService } from './arquiteto/service/arquiteto.service';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './cliente/service/cliente.service';
import { ProjetoComponent } from './projeto/projeto.component';
import { ProjetoService } from './projeto/service/projeto.service';

@NgModule({
  declarations: [
    AppComponent,
    ArquitetoComponent,
    ClienteComponent,
    ProjetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ArquitetoService, ClienteService, ProjetoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
