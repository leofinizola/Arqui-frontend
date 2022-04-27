import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArquitetoComponent } from './arquiteto/arquiteto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProjetoComponent } from './projeto/projeto.component';

const routes: Routes = [
  {
    path: 'arquiteto',
    component: ArquitetoComponent
  },
  {
    path: 'cliente',
    component: ClienteComponent
  },
  {
    path: 'projeto',
    component: ProjetoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
