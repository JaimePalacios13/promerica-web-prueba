import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import {FieldsetModule} from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerModule } from 'src/app/shared/modules/spinner/spinner.module';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { RegistroComponent } from './components/registro/registro.component';
import { IMaskModule } from 'angular-imask';



@NgModule({
  declarations: [
    ListaProductosComponent,
    ProductosComponent,
    NuevoComponent,
    RegistroComponent,
    
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    TableModule,
    HttpClientModule,
    SpinnerModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    FieldsetModule,
    IMaskModule
  ]
})
export class ProductosModule { }
