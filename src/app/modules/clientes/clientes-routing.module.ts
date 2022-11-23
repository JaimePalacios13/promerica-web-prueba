import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: 'agregar',
    component: NuevoComponent
  },
  {
    path: 'mostrar/:idusuario',
    component: NuevoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
