import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { HttpClientModule} from '@angular/common/http';

import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { BusseatsComponent } from './busseats/busseats.component';
//import { BookbusComponent } from './bookbus/bookbus.component';

@NgModule({
  declarations: [
    AppComponent,
    BusdetailsComponent,
    BusseatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
