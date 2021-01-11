import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputerTypeComponent } from "../components/computer-type/computer-type.component";
import { ComputerListComponent } from "../components/computer-list/computer-list.component";

const routes: Routes = [
  {
    path: `computer-type`,
    component: ComputerTypeComponent,
},
{
  path: `computer-list`,
  component: ComputerListComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
