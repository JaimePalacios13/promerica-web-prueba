import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'clientes',
        loadChildren: () => import('../clientes/clientes.module').then(m => m.ClientesModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('../productos/productos.module').then( m => m.ProductosModule)
      },
      {
        path:'ordenes',
        loadChildren: ()=> import('../ordenes/ordenes.module').then(m => m.OrdenesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
