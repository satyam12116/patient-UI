import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcmpComponent } from './addcmp/addcmp.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'table',component:TableComponent},
  {path:'add',component:AddcmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
