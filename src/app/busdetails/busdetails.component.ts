import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { BusbookingService } from '../busbooking.service';
import { Busdetails } from '../busdetails';

@Component({
  selector: 'app-busdetails',
  templateUrl: './busdetails.component.html',
  styleUrls: ['./busdetails.component.css']
})
export class BusdetailsComponent implements OnInit {
  public vehicleList:Array<Busdetails>;
  public lsFcity:any;
  public lsTcity:any;
  public lsDoj:any;
  constructor(private bks:BusbookingService, private route: Router) { 
    this.vehicleList=[];
  }

  ngOnInit(): void {
    this.lsFcity=localStorage.getItem('fcity');
    this.lsTcity=localStorage.getItem('tcity');
    this.lsDoj=localStorage.getItem('doj');
    this.bks.getBuses().subscribe(
      (data)=>{
          console.log(data);
          let dataArr:any=data;
          this.vehicleList=dataArr;
      },
      (error)=>
      {
        console.log(error);
      }
    )
  }
    checkmethod(x:Busdetails){
      let bid:any;
      bid=x.bid;
      localStorage.setItem('bid',bid);
      console.log(x.bid);
      this.route.navigate(['/busseats'])
    }  
}
