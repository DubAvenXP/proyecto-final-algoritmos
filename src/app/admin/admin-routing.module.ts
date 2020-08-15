import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
    children: [
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'inventario',
        component: InventarioComponent
      },
      {
        path: 'pedidos',
        component: PedidosComponent
      },
      {
        path: 'reportes',
        component: ReportesComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
