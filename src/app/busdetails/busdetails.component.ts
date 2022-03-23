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
  public busSearch:boolean;
  public searchFail:boolean;
  public sstatus:string;
  constructor(private bks:BusbookingService, private route: Router) { 
    this.vehicleList=[];
    this.busSearch=true;
    this.searchFail=false;
    this.sstatus="booked";
  }

  ngOnInit(): void {
    this.lsFcity=localStorage.getItem('fcity');
    this.lsTcity=localStorage.getItem('tcity');
    this.lsDoj=localStorage.getItem('doj');
    this.lsFcity='Mumbai';
     this.lsTcity='Bangalore';
     this.lsDoj='28MAR22';
    this.bks.getBusSearchDetails(this.lsFcity,this.lsTcity,this.lsDoj).subscribe(
      (data)=>{
          let dataArr:any=data;
          if(dataArr!==[] &&  dataArr!==null && dataArr!==undefined && dataArr.length>0){
          this.vehicleList=dataArr;
        }else{
            this.busSearch=false;
            this.searchFail=true;
        } 
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
      this.route.navigate(['/busseats']);


    }  
}
