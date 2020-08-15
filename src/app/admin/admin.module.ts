import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MaterialModule } from '../material/material.module';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SideNavComponent,
    UsersComponent,
    DashboardComponent,
    ReportesComponent,
    InventarioComponent,
    PedidosComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    RouterModule
  ]
})
export class AdminModule { }
