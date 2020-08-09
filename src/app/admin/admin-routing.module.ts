import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';


const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
