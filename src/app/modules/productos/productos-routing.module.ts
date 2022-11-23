import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent
  },
  {
    path:'agregar',
    component: NuevoComponent
  },
  {
    path: 'mostrar/:idproducto',
    component: NuevoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
