import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { BookbusComponent } from './bookbus/bookbus.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { BusseatsComponent } from './busseats/busseats.component';

const routes: Routes = [
  {path:'busDetails',component:BusdetailsComponent},
  {path:'busseats',component:BusseatsComponent},
  //{path:'check',component:BookbusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
