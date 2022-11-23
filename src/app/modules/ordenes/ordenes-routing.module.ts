import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaComponent } from './pages/nueva/nueva.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';

const routes: Routes = [
  {
    path: '',
    component: OrdenesComponent
  },
  {
    path: 'crear-orden',
    component: NuevaComponent
  },
  {
    path: 'mostrar/:idOrden',
    component: NuevaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenesRoutingModule { }
